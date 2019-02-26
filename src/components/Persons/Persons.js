import React, { Component } from "react";
import Person from "./Person/Person"

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log("Persons.js getDerivedState")
    //     // placeholder
    //     return state;
    // }

    // boolean to decide whether or not a component should update
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Persons.js shouldComponentUpdate")
        // placeholder
        return true;
    }

    // grabs props/state values before a component updates
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // placeholder
        console.log("Persons.js getSnapshotBeforeUpdate")
        return {message: "Snapshot!"};
    }

    // runs when a component updates
    componentDidUpdate() {
        // placeholder
        console.log("Persons.js componentDidUpdate");
    }

    // runs right before a component is removed
    componentWillUnmount() {
        // placeholder
        console.log("Persons.js componentWillUnmount")
    }

    render() {
        return this.props.persons.map((person, index) => {
        return (
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)} />
                )
        });
    };
}

export default Persons;