import React from "react";
import classes from "./Cockpit.css"

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = "";
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length < 3) {
      assignedClasses.push( classes.red );
    }
    if (props.persons.length < 2) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}> 
            <h1>React starter</h1>
            <p className={assignedClasses.join(" ")}>This is working</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle People
            </button>
        </div>
    );
}

export default Cockpit;