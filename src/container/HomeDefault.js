import React from 'react';
import { connect } from 'react-redux';
import HomDetailDefault from './../components/home/homeDetailDefault';
function HomeDefault(props){
    var {UsersAccountStore}=props;
    return (
        <HomDetailDefault UsersAccountStore={UsersAccountStore} />
    )
}

const mapStateToProps=(state)=>{
    return{
        UsersAccountStore:state.UsersAccountStore
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {

    }
}
export default connect(mapStateToProps,dispatchToProps)(HomeDefault);