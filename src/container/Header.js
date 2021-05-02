/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import HeaderComponent from './../components/layout/header';
import { connect } from 'react-redux';
import * as action from './../actions/login';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
 function Header(props){
     var {LayoutStore,UsersAccountStore}=props;
     useEffect(() => {
         props.GET_USER();
     }, [1])
     if(!LayoutStore){
         return <Redirect to="/login" />
     }
    const onClickLogout=()=>{
        props.onClickLogout();
    }
    return (
        <>
        <HeaderComponent UsersAccountStore={UsersAccountStore} onClickLogout={onClickLogout} />
        </>
    )
}

const mapStateToProps=(state)=>{
    return {
        LayoutStore:state.LayoutStore,
        UsersAccountStore:state.UsersAccountStore
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {
        onClickLogout:()=>{
            dispatch(action.LOGOUT_USER());
        },
        GET_USER:()=>{
            dispatch(action.USER_GET());
        }
    }
}
export default connect(mapStateToProps,dispatchToProps)(Header);