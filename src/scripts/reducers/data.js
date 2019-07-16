import { GETCITI, GETSHOP, GETTAILS, GETALLSHOP, ADDORDER } from "../actions";




const defaultState = {
   cities:"",
   shops:[],
//    tails:[],
   goods:[],
   Orders:[]
}

export const data = (state=defaultState,action)=>{
    switch(action.type){
        case GETCITI:
        return {...state,cities:action.cities}
        break

        case GETSHOP:
        return {...state,shops:action.shops}
        break
        
        // case GETTAILS:
        // return {...state,tails:action.tails}
        // break

        case GETALLSHOP:
        return {...state,goods:action.goods}
        break

        case ADDORDER:
        return {...state,Orders:action.Orders}
        break

        default:
        return state;
        break;
    }
}