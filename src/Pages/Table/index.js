import React, { useContext } from 'react';
import { TableContext } from '../../Contexts/table-context';
import Row from './Row';
import Information from '../../Components/Information';

const Table = () => {
  const { tableRows } = useContext(TableContext);
  return (
    <div className="table">
      {tableRows.map((tableRow) => (
        <Row tableRow={tableRow} key={tableRow.team} />
      ))}
      <Information>
        Du kan se mer info om du klickar på ett lag i tabellen eller gå till den
        officiella&nbsp;
        <a
          href="https://www.allsvenskan.se/tabell"
          target="_blank"
          rel="noopener noreferrer"
        >
          tabellen
        </a>
        .
      </Information>
    </div>
  );
};

export default Table;
