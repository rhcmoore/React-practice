import React from "react";

// Sets up a class on a div that wraps a component
// Method #1
// const withClass = (props) => {
//     <div className={props.classes}>
//         {props.children}
//     </div>
// }

// Method #2
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
}


// used in App.js render statement
export default withClass;