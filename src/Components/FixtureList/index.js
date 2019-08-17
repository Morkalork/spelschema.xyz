import React, {useContext} from 'react';
import {FixtureContext} from '../../Contexts/fixture-context';
import styled from 'styled-components';
import FixtureItem from '../FixtureItem';

const List = styled.div`
  
`;

export const FixtureList = () => {
  const {fixtures, hasErrors} = useContext(FixtureContext);
  console.log({fixtures});
  return <List>
    {fixtures.map(f => <FixtureItem key={f.id}
                                    date={f.date}
                                    gameTypes={f.gameTypes}
                                    isHomeGame={f.isHomeGame}
                                    link={f.link}
                                    opponent={f.opponent}
                                    soldTickets={f.soldTickets}
                                    ticketUrl={f.ticketUrl}
                                    venue={f.venue}/>)}
    {hasErrors && <p>Något gick tyvärr fel vid data hämtningen, var god försök igen senare...</p>}
  </List>;
};
