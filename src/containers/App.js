import React, { Component } from 'react';
// allows us to import classes scoped to this file
import classes from './App.css';
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      {id: 123123123, name: "max", age: 22},
      {id: 3453453, name: "jim", age: 33},
      {id: 67867867, name: "jane", age: 44}
    ],
    otherState: "Some other value",
    showPersons: false
  }

  // handle input field to change name
  nameChangeHandler = (event, id) => {
    // return the index from the person in state
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // set person = copy of relevant person
    const person = {
      ...this.state.persons[personIndex]
    };
    // modify the relevant person's name
    person.name = event.target.value;

    // copy state of persons and set relevant one to new value
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // set state with modified person
    this.setState({persons: persons})
  }

  // remove person from DOM on click
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // handle button click to toggle persons display
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length < 3) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length < 2) {
      assignedClasses.push( classes.bold );
    }
    
    return (
      <div className={classes.App}>
        <h1>React starter</h1>
        <p className={assignedClasses.join(" ")}>This is working</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle People
        </button>
        {persons}
      </div>
    );
  }
}

export default App;