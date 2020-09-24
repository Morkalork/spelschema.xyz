import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HomeAway from './HomeAway';
import moment from 'moment';

const Wrapper = styled.div`
  border-bottom: 2px rgba(0, 0, 0, 0.1) dashed;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;

  h2 {
    font-size: 1.15rem;
  }
`;

const SmallSpan = styled.span`
  font-size: 0.75rem;
`;

const Team = styled.span`
  font-size: 8px;
  opacity: 0.75;
`;

const getMenWomenTranslated = (team) => (team === 'women' ? 'dam' : 'herr');

const FixtureItem = ({
  date,
  gameTypes,
  isHomeGame,
  link,
  opponent,
  soldTickets,
  venue,
  team,
}) => (
  <Wrapper>
    <section>
      <Team>{getMenWomenTranslated(team)}</Team>
      <h2>
        {opponent} <HomeAway isHomeGame={isHomeGame} />
      </h2>
    </section>
    <section>
      <p>
        <SmallSpan>
          {moment(date.toLocaleString('sv-SE')).format('YYYY-MM-DD HH:mm')}
        </SmallSpan>
        {venue && <SmallSpan>, {venue}</SmallSpan>}
      </p>
      <p>
        {soldTickets > 0 && (
          <SmallSpan>Sålda biljetter: {soldTickets}</SmallSpan>
        )}
      </p>
    </section>
  </Wrapper>
);

FixtureItem.propTypes = {
  date: PropTypes.string,
  gameTypes: PropTypes.string,
  isHomeGame: PropTypes.bool,
  link: PropTypes.string,
  opponent: PropTypes.string,
  soldTickets: PropTypes.number,
  venue: PropTypes.string,
};

export default FixtureItem;
