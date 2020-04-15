import React ,{useEffect,useReducer} from 'react';
import axios from 'axios'

const initstate={
    data:{},
    load:true,
    error:""
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
        return{
            load:false,
            data:action.payload,
            error:""
        }
        case 'FETCH_ERROR':
            return{
            load:false,
            data:{},
            error:"something went wrong"
        }
    }
}
function Loadreducer(props) {   
   const [state,dispatch] = useReducer(reducer,initstate)
   useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts/4')
       .then(res =>{
           dispatch({type:"FETCH_SUCCESS" ,payload: res.data})
       })
       .catch(err =>{
           dispatch({type:'FETCH_ERROR'})
       })
   })
    return (
        <div>
            {
                state.load ?"Loads" :state.data.title
            }
        </div>
    );
}

export default Loadreducer;