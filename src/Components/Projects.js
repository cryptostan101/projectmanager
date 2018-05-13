import React, { Component } from 'react';
import ProjectsItem from './ProjectsItem';
import PropTypes from 'prop-types';





class Projects extends Component {

  deleteProject(id){

    this.props.onDelete(id);

  }
  render() {
    let arrItems;
    if(this.props.projects){

      arrItems = this.props.projects.map(mapItems => {

          return(
            <ProjectsItem onDelete={this.deleteProject.bind(this)} key={mapItems.title} project={mapItems} />



          );

      });

    }

    return (
      <div className="Projects">
      <h3> Latest Project </h3>
        {arrItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects:PropTypes.array,
  onDelete:PropTypes.func

};

export default Projects;
