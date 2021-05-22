/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import HomDetailDefault from './../components/home/homeDetailDefault';
import { useEffect } from 'react';
import * as action from './../actions/ketqua';
import * as action1 from './../actions/login';
import { Redirect } from 'react-router-dom';
function HomeDefault(props){
    var {UsersAccountStore,LoginUserStore}=props;
    useEffect(() => {
        props.GET_USER_DATA(LoginUserStore);
        props.GET_USER(LoginUserStore);
    }, [1])

    if(!LoginUserStore){
        return <Redirect to="/login" />
    }
    return (
        <HomDetailDefault UsersAccountStore={UsersAccountStore} />
    )
}

const mapStateToProps=(state)=>{
    return{
        UsersAccountStore:state.UsersAccountStore,
        LoginUserStore:state.LoginUserStore
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {
        GET_USER_DATA:(idUser)=>{
            dispatch(action.GET_KET_QUA_USER(idUser));
        },
        GET_USER:(idUser)=>{
            dispatch(action1.USER_GET(idUser));
        }
    }
}
export default connect(mapStateToProps,dispatchToProps)(HomeDefault);