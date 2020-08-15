const fetch = require('isomorphic-fetch');

let lastCheck = new Date();
let data = [];

const getFixtures = async (monthsAhead = 6) => {
  const now = new Date();
  const timeDiff = Math.round((now - lastCheck) / 1000);
  const timeToUpdate = timeDiff > 43200; // 12 hours

  if (data.length === 0 || timeToUpdate) {
    for (let i = 0; i < monthsAhead; i++) {
      const year = now.getFullYear().toString();
      const safeMonth = now.getMonth() + 1 + i;
      const month = (safeMonth > 12 ? safeMonth - 12 : safeMonth)
        .toString()
        .padStart(2, '0'); // Because fuck JavaScript, right?

      let fixtures;

      try {
        fixtures = await fetch(
          `https://www.mff.se/wp-json/mff/v1/match?page=1&posts_per_page=100&date=${year}${month}&year=${year}`
          // `http://localhost:3000/fake-data.json?page=1&posts_per_page=100&date=${year}${month}&year=${year}` // For debugging purposes
        ).then((response) => response.json());
      } catch (e) {
        console.error('COULD NO FETCH DATA! ', e);
        return null;
      }

      const mappedFixtures = fixtures
        .filter((d) => {
          return new Date(d.meta['match-date-time']) > new Date();
        })
        .map((d) => ({
          id: d.id,
          date: new Date(d.meta['match-date-time']),
          link: d.link,
          isHomeGame: d.meta['match-is-home'],
          soldTickets: d.meta['match-sold-tickets'],
          venue: d.meta['match-venue'],
          ticketUrl: d.meta['ticket-url'],
          opponent: d['opposing-team'],
          gameType: d.type,
          team: d.meta['team-men-women'] || 'men',
        }));
      data = [...data, ...mappedFixtures];
    }
  }

  return data;
};

module.exports = getFixtures;
