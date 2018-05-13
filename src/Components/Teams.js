import React, { Component } from 'react';
import TeamsItem from './TeamsItem';
import PropTypes from 'prop-types';



class Teams extends Component {


  render() {
    let arrItems;
    if(this.props.teams){

      arrItems = this.props.teams.map(mapItems => {

          return(
            <TeamsItem key={mapItems.id} team={mapItems} />

          );

      });

    }

    return (
      <div className="Teams">
      <h3> Team Members </h3>
        {arrItems}
      </div>
    );
  }
}

Teams.propTypes = {
  teams:PropTypes.array

};

export default Teams;
