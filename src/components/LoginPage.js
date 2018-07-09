import React from 'react';
import  { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
    console.log("props", props);
    return (
        <div>
            <button onClick={() => props.startLogin()}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);