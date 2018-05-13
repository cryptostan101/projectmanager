import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TeamsItem extends Component {

  render() {

    return (
      <li className="TeamsItem">

        <strong> {this.props.team.name} : </strong> {this.props.team.email}
      </li>
    );
  }
}
TeamsItem.propTypes = {
  team:PropTypes.object,

};

export default TeamsItem;
