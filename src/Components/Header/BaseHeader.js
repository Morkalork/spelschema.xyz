import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

const Wrapper = styled.header`
  margin-bottom: 1rem;
  background-color: #A7D7FF;
  padding: 1rem;
  color: #fff;
`;

const StyledH1 = styled.header`
  font-size: 1.75rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

const Spinner = styled.p`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-359deg);
    }
  }
  
  display: inline-block;
  &.updating {
    animation: spinner 4s linear infinite;
  }
`;

const SmallParagraph = styled.p`
  font-size: 0.75rem;
`;

const BaseHeader = ({headerText, isUpdating, reload, lastCheck}) => {
  const title = `Malmö FF ** ${headerText}`;
  document.title = title;
  return (<Wrapper>
    <StyledH1><p>{title}</p> <Spinner className={isUpdating ? 'updating' : ''}
                                                      onClick={reload}>⟲</Spinner></StyledH1>
    <SmallParagraph>
      Senast uppdaterad:
      {isUpdating && `Hämtar data...`}
      {!isUpdating && moment(lastCheck).format("YYYY-MM-DD HH:mm:ss")}
    </SmallParagraph>
  </Wrapper>);
};

BaseHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  isUpdating: PropTypes.bool,
  reload: PropTypes.func,
  lastCheck: PropTypes.number
};

export default BaseHeader;