
import { ICE_CREAM } from './iceActions'

const initialState= {
    numoficecereams : 20
}

const Icereducer = (state= initialState , action) =>{
    switch(action.type){
    case ('ICE_CREAM'): return{
        ...state,
        numoficecereams : state.numoficecereams - action.payload
    }
    default : return state
    }
}
 export default Icereducer