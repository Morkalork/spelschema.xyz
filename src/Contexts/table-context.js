import React from 'react';

const loadTable = async () => {
  return new Promise((resolve, reject) => {
    const url = "/api/teams/table";
    fetch(url).then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

export const TableContext = React.createContext();

export class TableProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableRows: [],
      lastCheck: Date.now(),
      isUpdating: false,
      hasError: false,
      fetchStatus: 0,
      reload: () => {
        this.doReload();
      }
    };
  }

  async doReload() {
    this.setState({isUpdating: true, fetchStatus: 0});
    const tableRows = await loadTable();
    const hasErrors = tableRows.length === 0;
    this.setState({
      lastCheck: Date.now(),
      hasErrors,
      tableRows,
      isUpdating: false
    });
  }

  componentDidMount() {
    this.doReload();
  }

  render() {
    return (
      <TableContext.Provider value={this.state}>
        {this.props.children}
      </TableContext.Provider>
    );
  }
}
