import React, { PureComponent } from "react";
import Person from "./Person/Person"

// PureComponent is a normal component that adds a
// shouldComponentUpdate that checks all props for changes
class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log("Persons.js getDerivedState")
    //     // placeholder
    //     return state;
    // }

    // boolean to decide whether or not a component should update
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Persons.js shouldComponentUpdate")
    //     // if props don't change, don't re-render
    //     // use if parent component could change without... 
    //     // ...affecting this component
    //     return (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.change !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     )
    // }

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