import React, { Component } from 'react';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    state = {
        isvalidated : false
    }
    _handleUsernameChange(event) {
        this.setState({value: event.target.value});
    }
    _handlePasswordChange(event) {
        this.setState({value: event.target.value});
    }
    
    _handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    _validate = () => {
        const formLength = this.form
    }
    _onSubmit = () => {
        alert("Hello");
    }

    render(){
        return(
            <div>
            <form onSubmit={this._handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="Username" value={this.state.value} onChange={this._handleUsernameChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="Password"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default LoginScreen;