import React, { Component } from 'react';
// allows us to import classes scoped to this file
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit"

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor")
  }

  state = {
    persons: [
      { id: 123123123, name: "max", age: 22 },
      { id: 3453453, name: "jim", age: 33 },
      { id: 67867867, name: "jane", age: 44 }
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  componentDidMount() {
    // placeholder
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // placeholder
    console.log("App.js shouldComponentUpdate")
    return true;
  }

  componentDidUpdate() {
    // placeholder
    console.log("App.js component did update");
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
    this.setState({ persons: persons })
  }

  // remove person from DOM on click
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  // handle button click to toggle persons display
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    console.log("app.js render statement")
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={()=>{this.setState({showCockpit:false})}}>Remove cockpit</button>
        
        {this.state.showCockpit ? (
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler} />
        ) : null }
        {persons}
      </div>
    );
  }
}

export default App;