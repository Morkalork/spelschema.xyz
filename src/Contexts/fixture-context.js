import React from 'react';

const loadFixtures = async () => {
  return new Promise((resolve, reject) => {
    const url = '/api/fixtures/6';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        window.localStorage.setItem('mm-fixtures', JSON.stringify(data));
        resolve(data);
      })
      .catch(reject);
  });
};

export const FixtureContext = React.createContext();

export class FixtureProvider extends React.Component {
  constructor(props) {
    super(props);

    let fixtures = [];
    const fixtureData = window.localStorage.getItem('mm-fixtures');
    if (fixtureData) {
      fixtures = JSON.parse(fixtureData);
    }

    this.state = {
      fixtures,
      lastCheck: Date.now(),
      isUpdating: false,
      hasError: false,
      fetchStatus: 0,
      reload: () => {
        this.doReload();
      }
    };
  }

  async doReload() {
    this.setState({ isUpdating: true, fetchStatus: 0 });
    const fixtures = await loadFixtures();
    const hasErrors = fixtures === null;
    this.setState({
      lastCheck: Date.now(),
      hasErrors,
      fixtures: hasErrors
        ? []
        : fixtures.reduce((arr, data) => {
            if (!arr.find(a => a.id === data.id)) {
              arr.push(data);
            }
            return arr;
          }, this.state.fixtures),
      isUpdating: false
    });
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
