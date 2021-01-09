import React from 'react'
import '../css/Homepage.css'


const Navbar = props => {
    return(
        <div id='navbarContainerDiv'>
            <div class='menuNav'>Home</div>
            <div class='menuNav' >My Portfolios</div>
            <div class='menuNav' >My Watchlist</div>
            <div class='menuNav' >News</div>
            {true ? <div class='menuNav' >Signup / Login</div> : <div class='menuNav' >Logout</div>} 
        </div>
    )
}

export default Navbar