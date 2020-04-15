import {BUY_CAKE} from './CakeItem'
const initalState = {
    numofCake:10
}
const cakeReducer =(state=initalState,action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numofCake: state.numofCake - action.payload
        }
        default: return state
            
        
    }
}
export default cakeReducer