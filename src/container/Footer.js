import React from 'react';
import FooterComponent from './../components/layout/footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Footer(props){
    var {LoginUserStore}=props;
    if(!LoginUserStore){
        return <Redirect to="/login" />
    }
    return (
        <>
        <FooterComponent />
        </>
    )
}


const mapStateToProps=(state)=>{
    return {
        LoginUserStore:state.LoginUserStore
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {

    }
}
export default connect(mapStateToProps,dispatchToProps)(Footer)