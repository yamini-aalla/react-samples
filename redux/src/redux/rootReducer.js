import {combineReducers} from 'redux';
import CakeReducer from './cake/CakeReducer'
import IceReducer from './Icecream/IceReducer'
import userReducer from './user/userReducer'
const rootReducer = combineReducers({
    ice:IceReducer,
    cake:CakeReducer,
    user:userReducer
})
export default rootReducer