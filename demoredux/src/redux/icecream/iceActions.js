import {ICE_CREAM} from './iceType'

export function buyIcecream (number ){
    return{
        type:ICE_CREAM,
        payload : number
    }
}