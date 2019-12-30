import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAll, deleteOne } from "../../actions/leads";

class Leads extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    return (
      <Fragment>
        <h2>Leaders</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.props.deleteOne.bind(this, lead.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getAll, deleteOne }
)(Leads);
