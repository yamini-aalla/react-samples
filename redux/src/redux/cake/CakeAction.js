import { BUY_CAKE } from './CakeItem'
export const buyCake = (number) => {
    return{
        type:BUY_CAKE,
        payload:number
    }
}

