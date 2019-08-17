import React from 'react';
import fetch from 'isomorphic-fetch';
import moment from 'moment';

const loadFixtures = async monthsAhead => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const safeMonth = currentDate.getMonth() + 1 + monthsAhead;
  const month = ((safeMonth > 12 ? safeMonth - 12 : safeMonth))
    .toString()
    .padStart(2, '0'); // Because fuck JavaScript, right?

  let data;

  try {
    data = await fetch(
      // `https://www.mff.se/wp-json/mff/v1/match?page=1&posts_per_page=100&date=${year}${month}&year=${year}`
      `fake-data.json?page=1&posts_per_page=100&date=${year}${month}&year=${year}` // For debugging purposes
    ).then(response => response.json());
  } catch (e) {
    console.error('COULD NO FETCH DATA!');
    return null;
  }

  console.log(data);
  return data
    .filter(d => !d.meta['match-is-played'])
    .map(d => ({
      id: d.id,
      date: new Date(d.meta['match-date-time']),
      link: d.link,
      isHomeGame: d.meta['match-is-home'],
      soldTickets: d.meta['match-sold-tickets'],
      venue: d.meta['match-venue'],
      ticketUrl: d.meta['ticket-url'],
      opponent: d['opposing-team'],
      gameType: d.type
    }));
};

export const FixtureContext = React.createContext();

export class FixtureProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixtures: [],
      lastCheck: '',
      isUpdating: false,
      hasError: false,
      fetchStatus: 0,
      reload: () => {
        this.doReload();
      }
    };
  }

  async doReload() {
    this.setState({isUpdating: true, fetchStatus: 0});
    const MAX_RUNS = 6;
    for (let i = 0; i < MAX_RUNS; i++) {
      const fixtures = await loadFixtures(i);
      const hasErrors = fixtures === null;
      this.setState({
        lastCheck: moment().format("YYYY-MM-DD HH:mm:ss"),
        hasErrors,
        fixtures: hasErrors ? [] : fixtures.reduce((arr, data) => {
          if (!arr.find(a => a.id === data.id)) {
            arr.push(data);
          }
          return arr;
        }, this.state.fixtures),
        isUpdating: i !== MAX_RUNS - 1,
        fetchStatus: i === 0 ? 0 : Math.ceil((i / MAX_RUNS) * 100)
      });
    }
  }

  componentDidMount() {
    this.doReload();
  }

  render() {
    return (
      <FixtureContext.Provider value={this.state}>
        {this.props.children}
      </FixtureContext.Provider>
    );
  }
}
