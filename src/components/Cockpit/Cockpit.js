import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
    // using useRef hook
    const toggleButtonRef = useRef(null);
    // hooking into auth-context data
    const authContext = useContext(AuthContext);

    // returns authContext object
    console.log(authContext)

    // executes every render cycle, 
    // so we can use like componentDidMount/Update 
    // (and we can have multiple)
    useEffect(() => {
        console.log("cockpit.js useEffect")
        // setTimeout(() => {
        //     // Fake HTTP request
        //     alert("Saved data to cloud")
        // }, 1000);
        toggleButtonRef.current.click();
        return () => {
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
        assignedClasses.push(classes.red);
    }
    if (props.personsLength < 2) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is working</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle People
            </button>
            <button onClick={authContext.login}>
                Log In
            </button>
        </div>
    );
}

// memoizes the component and will update when inputs change
export default React.memo(cockpit);