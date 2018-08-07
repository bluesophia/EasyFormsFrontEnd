import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classnames from 'classnames';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation:'',
            errors: {},
            isLoading: false
        }
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }
    _onChange(e){
        this.setState({ [e.target.name] : e.target.value});
    }
    _onSubmit(e){
        this.setState({ errors: {}, isLoading:true });
        e.preventDefault();
        this.props.userSignupRequest(this.state)
        .then(
            //이벤트핸들러
            () => {},
            ({ data }) => this.setState({ errors: data, isLoading:false })

        )
        // axios.post('/api/users', {user: this.state});
    }
    render() { 
        const { errors } = this.state;
        return(
            <ThemeProvider theme={Themes}>  
            <form onSubmit={this._onSubmit}>
                <h1>Sign up</h1>
                <div className={classnames("form-group", {'has-error': errors.username })}>
                    <label>Username</label>
                    <input 
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this._onChange}
                    />
                    {errors.username && <SpanStyle>{errors.username}</SpanStyle>}
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
                    {errors.email && <SpanStyle>{errors.email}</SpanStyle>}
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
                    {errors.password && <SpanStyle>{errors.password}</SpanStyle>}
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
                    {errors.passwordConfirmation && <SpanStyle>{errors.passwordConfirmation}</SpanStyle>}
                </div>
                <div>
                <button disabled={this.state.isLoading}>Submit</button>
                </div>
            </form> 
            </ThemeProvider>   
        )
    }
}

// SignupForm.propTypes = {
//     userSignupRequest: PropTypes.func.isRequired
// }


const SpanStyle = styled.span`
  color: red;
`

export default SignupForm;