import React from 'react'
import '../css/Homepage.css'


const Navbar = props => {
    return(
        <div id='navbarContainerDiv'>
            <div class='menuNav'>Home</div>
            <div class='menuNav' >My Portfolios</div>
            <div class='menuNav' >My Watchlist</div>
            <div class='menuNav' >News</div>
        </div>
    )
}

export default Navbar