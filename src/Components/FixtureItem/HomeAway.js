import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.span`
  text-transform: uppercase;
`;

const HomeAway = ({isHomeGame}) => (<Wrapper>
  ({isHomeGame ? 'h' : 'b'})
</Wrapper>);

HomeAway.propTypes = {
  isHomeGame: PropTypes.bool
};

export default HomeAway;