/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import IntroducerComponent from './../components/introduce/introduce';
import { useEffect } from 'react';
import * as action  from './../actions/introduce';
import Item from './../components/introduce/item';
function Introduce(props){
    var {IntroduceStore}=props;


    
    useEffect(() => {
        props.GET_INTRODUCE();
    }, [1])
    const show=(data)=>{
        var result=null;
        if(data){
            result=data.map((value,key)=>{
                return(
                    <Item key={key} value={value} />
                )
            })
        }
        return result;
    }
    return (
        <>
        <IntroducerComponent show={show(IntroduceStore)} />
        </>
    )
}

const mapStateToProps=(state)=>{
    return {
        IntroduceStore:state.IntroduceStore
    }
}
export const dispatchToProps=(dispatch,props)=>{
    return{
        GET_INTRODUCE:()=>{
        dispatch(action.GET_INTRODUCE());
        }
    }
}
export default (connect(mapStateToProps,dispatchToProps)) (Introduce);