/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import OnlineComponent from './../components/home/online/online';
import * as action from './../constanst/Online';
function Online(props){
    useEffect(() => {
        props.GET_USER_ONLINE();
    }, [1]);
    return (
        <>
        <OnlineComponent />
        </>
    )
}

export const mapStateToProps=(state)=>{
    return {
        OnlineStore:state.OnlineStore
    }
}
export const dispatchToProps=(dispatch,props)=>{
    return{
        GET_USER_ONLINE:()=>{
            dispatch(action.GET_USER_ONLINE());
        }
    }
}

export default (connect(mapStateToProps, dispatchToProps))(Online);