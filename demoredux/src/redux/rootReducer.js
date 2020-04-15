import {combineReducers} from 'redux'
import CakeReducer from './cake/cakeReducer'
import Icereducer from './icecream/iceReducer'
import userReducer from './user/userReducer'
const rootReducer = combineReducers({
    cake: CakeReducer ,
    icecream : Icereducer,
    user : userReducer
})
 export default rootReducer