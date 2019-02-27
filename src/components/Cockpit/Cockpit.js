import React, {useEffect} from "react";
import classes from "./Cockpit.css"

const cockpit = (props) => {

    // executes upon every render cycle, 
    // so we can use like componentDidMount/Update 
    // (and we can have multiple)
    useEffect(() => {
        console.log("cockpit.js useEffect")
        // setTimeout(() => {
        //     // Fake HTTP request
        //     alert("Saved data to cloud")
        // }, 1000);
        return() => {
            // would display if cockpit component was removed
            console.log("cockpit.js cleanup work in useEffect")
        }
    // optional argument: run useEffect when this value changes (dependency)
    // empty array: run once (used like componentDidMount)
    }, [props.person]);

    const assignedClasses = [];
    let btnClass = "";
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength < 3) {
      assignedClasses.push( classes.red );
    }
    if (props.personsLength < 2) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.cockpit}> 
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is working</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle People
            </button>
        </div>
    );
}

// memoizes the component and will update when inputs change
export default React.memo(cockpit);