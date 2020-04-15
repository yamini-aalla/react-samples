import {BUY_ICE} from './IceType'
const initState= {
    numofIce:10
}

const iceReducer =(state=initState , action) =>{
    switch(action.type){
        case BUY_ICE: return{
            ...state,
            numofIce: state.numofIce + 1
        }
        default: return state
    }
}
export default iceReducer