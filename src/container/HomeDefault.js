/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import HomDetailDefault from './../components/home/homeDetailDefault';
import { useEffect } from 'react';
import * as action from './../actions/ketqua';
function HomeDefault(props){
    var {UsersAccountStore,iDUserStore}=props;
    useEffect(() => {
        props.GET_USER_DATA(iDUserStore);
    }, [1])
    return (
        <HomDetailDefault UsersAccountStore={UsersAccountStore} />
    )
}

const mapStateToProps=(state)=>{
    return{
        UsersAccountStore:state.UsersAccountStore,
        iDUserStore:state.iDUserStore
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {
        GET_USER_DATA:(idUser)=>{
            dispatch(action.GET_KET_QUA_USER(idUser));
        }
    }
}
export default connect(mapStateToProps,dispatchToProps)(HomeDefault);