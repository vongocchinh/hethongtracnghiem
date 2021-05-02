import React from 'react';
import FooterComponent from './../components/layout/footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Footer(props){
    var {LayoutStore}=props;
    if(!LayoutStore){
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
        LayoutStore:state.LayoutStore
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {

    }
}
export default connect(mapStateToProps,dispatchToProps)(Footer)