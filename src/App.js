import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProjects from './Components/AddProjects';
import uuid from 'uuid';
import $ from 'jquery';
import Teams from './Components/Teams';
import Navbar from './Components/Navbar';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: []

    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      dataType: 'json',
      cache: 'false',
      success: function(data){
        this.setState({teams: data}, function(){
          console.log(this.state);
        });
        //console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });

  }

  getProjects(){

    this.setState({

      projects: [
        {
          id:       uuid.v4(),
          title:    'Website Design',
          category: 'UI Design'
        },
        {
          id:       uuid.v4(),
          title:    'Pictures',
          category: 'Photographer'
        },
        {
          id:       uuid.v4(),
          title:    'Build House-',
          category: 'Civil Engineer'
        }

      ]


    });

  }
  componentWillMount(){


    this.getTodos();
    this.getProjects();

  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects
    projects.push(project);
    this.setState({projects:projects});
  }

  deleteProject(id){
    let projects = this.state.projects
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">

            <div className="row">
                <div className="col s12 m6">
                    <div className="card-panel">
                        <AddProjects addProject={this.handleAddProject.bind(this)} />
                        <Projects projects={this.state.projects} onDelete={this.deleteProject.bind(this)} />
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card-panel">
                        <Teams teams={this.state.teams}  />
                    </div>
                </div>
             </div>
        </div>

      </div>
    );
  }
}

export default App;
