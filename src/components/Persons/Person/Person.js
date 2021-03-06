import React, {Component} from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
// import Aux from "../../../hoc/Aux"
import withClass from "../../../hoc/WithClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    // property available to class-based components for context
    // React connects component to context, and 
    // gives us access to 'this', which holds auth info
    static contextType = AuthContext;

    // focuses on the input
    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context)
    }

    render() {
        return (
            // Using Aux as a wrapper to return a single expression
            <React.Fragment>
                
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                    
            
                <p key="i1" onClick={this.props.click}>
                    Me llamo {this.props.name} and I'm {this.props.age} 
                </p>
                <p key="i2">
                    {this.props.children}
                </p>
                <input 
                    key="i3"
                    // ref grabs a hold of this element and
                    // makes it available in componentDidMount
                    // Approach #1
                    // ref={ (inputEl) => {this.inputElement = inputEl} }
                    // Approach #2
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </React.Fragment>
        )
    }
}

// define expected props data types
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);