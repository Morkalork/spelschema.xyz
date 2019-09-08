import React, {useContext} from 'react';
import {TableContext} from '../../Contexts/table-context';
import Row from './Row';
import styled from 'styled-components';

const Information = styled.div`
  margin: 1rem 0;
  font-size: 0.85rem;
  font-style: italic;;
`;

const Table = () => {
  const {tableRows} = useContext(TableContext);
  return <div className='table'>
    {tableRows.map((tableRow) => <Row tableRow={tableRow} key={tableRow.team}/>)}
    <Information>
      <p>Du kan se mer info om du klickar på ett lag i tabellen.</p>
    </Information>
  </div>;
};

export default Table;