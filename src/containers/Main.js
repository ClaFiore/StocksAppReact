import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import '../css/Homepage.css'
import {connect} from 'react-redux'

const Main = props => {
    return(
        <div id='homeContainer'>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    )
}



const mapStateToProps = state => {
    return {view: state.viewReducer.view}

}

const mapDispatchToProps = dispatch => {
    return{
        view: ((view) => dispatch({type: 'view', payload: view}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)