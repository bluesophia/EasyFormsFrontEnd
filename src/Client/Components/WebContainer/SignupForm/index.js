import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation:''
        }
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }
    _onChange(e){
        this.setState({ [e.target.name] : e.target.value});
    }
    _onSubmit(e){
        e.preventDefault();
        this.props.userSignupRequest(this.state);
        // axios.post('/api/users', {user: this.state});
    }
    render() {
        return(
            <form onSubmit={this._onSubmit}>
                <h1>Sign up</h1>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this._onChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        value={this.state.email}
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={this._onChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        value={this.state.password}
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={this._onChange}
                    />
                </div>
                <div className="form-group">
                    <label>password Confirmation</label>
                    <input 
                        value={this.state.passwordConfirmation}
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                        onChange={this._onChange}
                    />
                </div>
                <div>
                <button>Submit</button>
                </div>
            </form>    
        )
    }
}

// SignupForm.propTypes = {
//     userSignupRequest: PropTypes.func.isRequired
// }

export default SignupForm;