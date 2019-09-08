import React from 'react';
import styled from 'styled-components';

const StyledInformation = styled.div`
  margin: 1rem 0;
  font-size: 0.85rem;
  font-style: italic;;
`;

const Information = ({children}) => <StyledInformation>
  <p>{children}</p>
</StyledInformation>;

export default Information;