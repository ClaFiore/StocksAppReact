import React from 'react'

const Login = props => {
    return(
        <div>
            <h1>LOGIN</h1>
            <form>
                <input type='text' placeholder='Email Address' />
                <input type='password' placeholder='Enter your password'/>
                <input type='submit'/>
            </form>
            <span><h3>Don't have an account yet?</h3></span><span><button>Sign Up</button></span>
        </div>
    )
}

export default Login