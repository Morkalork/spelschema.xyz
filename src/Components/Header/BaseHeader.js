import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import updateTitle from '../../helpers/update-title';

const Wrapper = styled.header`
  margin-bottom: 1rem;
  background-color: #a7d7ff;
  padding: 1rem;
  color: #fff;
`;

const StyledH1 = styled.header`
  font-size: 1.75rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Title = styled.p`
  max-width: calc(100% - 3rem);
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

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 2rem;
  &.updating {
    animation: spinner 4s linear infinite;
  }
`;

const SmallParagraph = styled.p`
  font-size: 0.75rem;
`;

const BaseHeader = ({ headerText, isUpdating, reload, lastCheck }) => {
  const title = `${headerText} ** Malmö FF`;
  updateTitle(title);
  return (
    <Wrapper>
      <StyledH1>
        <Title>{title}</Title>{' '}
        {isUpdating !== undefined && (
          <Spinner className={isUpdating ? 'updating' : ''} onClick={reload}>
            ⟲
          </Spinner>
        )}
      </StyledH1>
      <SmallParagraph>
        Senast uppdaterad:&nbsp;
        {isUpdating && `Hämtar data...`}
        {!isUpdating && moment(lastCheck).format('YYYY-MM-DD HH:mm:ss')}
      </SmallParagraph>
    </Wrapper>
  );
};

BaseHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  isUpdating: PropTypes.bool,
  reload: PropTypes.func,
  lastCheck: PropTypes.number,
};

export default BaseHeader;
