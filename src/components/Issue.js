import React from "react";

class Issue extends React.Component {
  render() {
    const { issue, handleDelete } = this.props;
    return (
      <tr>
        <td>{issue}</td>
        <td>
          <a
            onClick={handleDelete}
            className="btn-floating btn-small waves-effect waves-light red "
          >
            <i className="material-icons">delete</i>
          </a>
        </td>
      </tr>
    );
  }
}
export default Issue;
