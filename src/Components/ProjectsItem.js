import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProjectsItem extends Component {

  deleteProject (id){

    this.props.onDelete(id);
  }
  render() {

    return (
      <li className="ProjectsItem">

        <strong> {this.props.project.title} : </strong> {this.props.project.category}
        <a className="waves-effect waves-teal btn-flat" href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>


      </li>
    );
  }
}
ProjectsItem.propTypes = {
  project:PropTypes.object,
  onDelete:PropTypes.func

};

export default ProjectsItem;
