import {BUY_CAKE} from './cakeACtions'
const initialState ={
    numofcakes : 10
}

const CakeReducer = (state=initialState , action) => {
    switch(action.type) {
        case ('BUY_CAKE') : return{
            numofcakes : state.numofcakes -1
        }
        default : return state
    }
}
 export default CakeReducer