import React, { Component } from 'react';
import SignupForm from '../../Components/WebContainer/SignupForm'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions'

class SignupScreen extends Component {
    render() {
        const { userSignupRequest } = this.props;
        return(
            <div>
                <SignupForm userSignupRequest={userSignupRequest}/>
            </div>
        )
    }
}

SignupScreen.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect((state) => { return{} }, {userSignupRequest})(SignupScreen);