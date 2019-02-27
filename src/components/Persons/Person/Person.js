import React, {Component} from "react";
import classes from "./Person.css";
// import Aux from "../../../hoc/Aux"
import withClass from "../../../hoc/WithClass";

class Person extends Component {

    render() {
        return (
            // Using Aux as a wrapper to return a single expression
            <React.Fragment>
                <p key="i1" onClick={this.props.click}>
                    Me llamo {this.props.name} and I'm {this.props.age} 
                </p>
                <p key="i2">
                    {this.props.children}
                </p>
                <input 
                    key="i3" 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </React.Fragment>
        )
    }
}

export default withClass(Person, classes.Person);