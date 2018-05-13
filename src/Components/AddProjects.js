import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import $ from 'jquery';





class AddProjects extends Component {

  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }


  static defaultProps = {

    categories:['UI Design', 'Photographer', 'Civil Engineer' ]
  }


  handleSubmit(e){

    console.log("Form submitted");
    console.log(this.refs.title.value);
    console.log(this.refs.category.value);


    if(this.refs.title.value === ''){
      alert("Please enter a title");
    }
    else{

      this.setState({newProject:{
        id:       uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value

      }}, function(){

        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });

    }

    e.preventDefault();


  }

  render() {
    let categoryoptions;
    categoryoptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}> {category} </option>
      );

    });

    return (
      <div className="AddProjects">
      <h1> Add Projects </h1>

      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label> Title </label> <br />
          <input type="text" ref="title" />
        </div>

        <div>
          <label> Category </label> <br />
          <input type="text" ref="category" />
        </div>
        {/* This code does not work due to need to initialize select dom with jquery
        <div>
          <label> Category </label> <br />
          <select ref="category">

            {categoryoptions}

          </select>
        </div>
        */}
        <br />

        <button className="btn waves-effect waves-light" type="submit" value="submit">Submit</button>

      </form>

      </div>
    );
  }
}



AddProjects.propTypes = {
  categories:PropTypes.array,
  addProject:PropTypes.func

};

export default AddProjects;
