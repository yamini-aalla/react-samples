import {FETCH_REQUEST,FETCH_SUCCESS, FETCH_FAILURE } from './userType';
import axios from 'axios';
export const fetchRequest =() =>{
   return{
   type:FETCH_REQUEST
}
}
export const fetchSuccess =(user) =>{
    return{
        type: FETCH_SUCCESS,
        payload:user
    }
}
export const fetchFailure =(error) =>{
    return{
        typr: FETCH_FAILURE,
        payload:error
    }
}
export const fetchUser =() =>{
    return (dispatch) => {     //action creator returns action 
            dispatch(fetchRequest())
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                const user = res.data;
                dispatch(fetchSuccess(user))
            })
            .catch(err =>{
                const error = err.message;
                dispatch(fetchFailure(error))
            })
    }
}