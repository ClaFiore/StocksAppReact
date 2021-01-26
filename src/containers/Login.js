import React from 'react'
import SignUp from './SignUp'

const Login = props => {
    return(
        <div id='loginContainer'>
            <h1>LOGIN</h1>
            <form>
                <input type='text' placeholder='Email Address' />
                <input type='password' placeholder='Enter your password'/>
                <input type='submit'/>
            </form>
            <span><h3>Don't have an account yet?</h3></span><span><SignUp/></span>
        </div>
    )
}

export default Login