import React, { Component } from "react";

class Table extends Component {
  state = { employees: this.props };

  componentDidMount() {
    this.setState({
      employees: this.props.table,
    });
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick={this.props.clickEvent}>
              Name
            </th>
            <th scope="col">Location</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        {this.props.person.map((a, b) => (
          <tbody key={b}>
            <tr>
              <th scope="row">
                <img src={a.picture.thumbnail} alt={a.name.first} />
              </th>
              <td>
                {a.name.first} {a.name.last}
              </td>
              <td>
                {a.location.city}, {a.location.state}
              </td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}

export default Table;