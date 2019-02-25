import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person.js";

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit", 
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id} 
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}/>
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style["hover"] = {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    const classes = [];
    if (this.state.persons.length < 3) {
      classes.push("red");
    }
    if (this.state.persons.length < 2) {
      classes.push("bold");
    }
    
    return (
      <div className="App">
        <h1>React starter</h1>
        <p className={classes.join(" ")}>This is working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle People
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Person from "./Person/Person.js"

// const app = props => {
//   // passing initial state
//   // useState returns array with 2 elements:
//     // 1) current state
//     // 2) function that allows us to update state for re-render
//   const [ personsState, setPersonsState ] = useState({
//   // ^^ array destructuring for the 2 elements
//     persons: [
//       {name: "max", age: 22},
//       {name: "jim", age: 33},
//       {name: "jane", age: 44}
//     ]
//   });

//   const [otherState, setOtherState] = useState("some other value")

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: "Miller", age: 22},
//         {name: "jim", age: 33},
//         {name: "Jasdasd", age: 44}
//       ],
//       otherState: personsState.otherState
//     })
//   }

//   return (
//     <div className="App">
//       <h1>React starter</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }

// export default app;
