import React, {useState} from 'react';
import styled from 'styled-components';
import SlideDown from 'react-slidedown';

const Wrapper = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }
  .extra {
    overflow: hidden;
    transition: .5s;
    padding-left: 0.5rem;
    
    table {
      margin-bottom: 0.25rem;
      text-align: left;
      font-size: 1rem;
      th {
        padding-right: 1rem;
      }
    }
  }
`;

const Row = ({tableRow}) => {
  const [isShowing, setIsShowing] = useState(false);
  const onClick = () => setIsShowing(!isShowing);

  return <Wrapper onClick={onClick}>
    <div className='row'>
      <p>{tableRow.team}</p>
      <p>{tableRow.points}</p>
    </div>
    <SlideDown closed={!isShowing} className='extra'>
      <table>
        <tbody>
        <tr>
          <th>Vinster:</th>
          <td>{tableRow.wins}</td>
        </tr>
        <tr>
          <th>Oavgjorda:</th>
          <td>{tableRow.draws}</td>
        </tr>
        <tr>
          <th>Förluster:</th>
          <td>{tableRow.losses}</td>
        </tr>
        <tr>
          <th>Målskillnad:</th>
          <td>{tableRow.diff}</td>
        </tr>
        <tr>
          <th>Spelade matcher:</th>
          <td>{tableRow.numberOfGames}</td>
        </tr>
        </tbody>
      </table>
    </SlideDown>
  </Wrapper>;
};

export default Row;