import * as types from './../constanst/result';
import * as types1 from './../constanst/question';
import {db} from './../config/fbConfig';
export const ADD_RESULT=(e)=>{
    return {
        type:types.ADD_RESULT,
        payload:{
            data:e
        }
    }
}

export const onClickResult=(id)=>{
    return (dispatch,getState,{getFirebase})=> {
        db.collection('question').where('categoryId','==',id).get().then(res=>{
            var data=[];
            res.forEach(doc=>{
                data.push({
                    id:doc.id,
                    data:doc.data()
                })
            });
            var dataResult=JSON.parse(localStorage.getItem('arrResult'));

            var count = 0,itemR=0;
            for (let i = 0; i < dataResult.length; i++) {
              for (let j = 0; j < data.length; j++) {
                if (dataResult[i].da === data[j].data.result) {
                  count += 5;
                  itemR++;
                }
              }
            }
            var itemW=data.length-itemR;
            var user=JSON.parse(localStorage.getItem('id'));
            if (user) {
                db.collection("user").where('uidAuthentication','==',user).get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach(function(doc) {
                        var idU=doc.id;
                        db.collection('user').doc(idU).set({
                            IDSV: doc.data().IDSV,
                            fullname: doc.data().fullname,
                            rules: doc.data().rules,
                            uidAuthentication: doc.data().uidAuthentication,
                            count,itemR,itemW
                        }).then(res=>{
                            var datas={
                                IDSV: doc.data().IDSV,
                                fullname: doc.data().fullname,
                                rules: doc.data().rules,
                                uidAuthentication: doc.data().uidAuthentication,
                                count,itemR,itemW
                            }
                            dispatch(GET_SUUCESS(datas));
                        }).catch(er=>{
                        })
                    }
                    )
                })
            }

                        dispatch(FINISH());
        })
        .catch(err=>{
        })
    }
}

export const FINISH=()=>{
    return {
        type:types.FINISH_RESULT
    }
}


const GET_SUUCESS=(data)=>{
    return {
        type:types1.GET_KET_QUA_SUCCESS,
        data
    }
}