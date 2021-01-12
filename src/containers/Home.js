import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import '../css/Homepage.css'
import {connect} from 'react-redux'

const Home = props => {
    return(
        <div id='homeContainer'>
            <Navbar/>
            <Main/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)