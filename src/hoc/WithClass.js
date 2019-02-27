import React from "react";

// Sets up a class on a div that wraps a component
const withClass = props => {
    <div className={props.classes}>
        {props.children}
    </div>
}

// used in App.js
export default withClass;