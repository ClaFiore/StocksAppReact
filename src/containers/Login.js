import React from 'react'

const Login = props => {
    return(
        <div>
            <form>
                <input type='text' placeholder='Email Address' />
                <input type='password' placeholder='Enter your password'/>
            </form>
        </div>
    )
}

export default Login