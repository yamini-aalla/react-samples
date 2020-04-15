import {FETCH_REQUEST,FETCH_SUCCESS, FETCH_FAILURE } from './userType'
const initState ={
    user :[],
    loading:false,
    error:''
}

const userReducer =(state=initState , action) =>{
    switch(action.type){
        case FETCH_REQUEST: return{
            ...state,
            loading : true
        }
        case FETCH_SUCCESS: return{
            loading : false,
            user :action.payload,
            error:''
        }
        case FETCH_FAILURE: return{
            loading:false,
            user:[],
            error:action.payload
        }
        default: return state
    }
}
 export default userReducer