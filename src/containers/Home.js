import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import '../css/Homepage.css'

const Home = props => {
    return(
        <div id='homeContainer'>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home