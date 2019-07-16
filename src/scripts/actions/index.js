


export const SETTAB="setTab"
export const setTab =tab=>{
    return{
       type:SETTAB,
       tab
    }
}

import {axios} from "&"
// 搜索定位地址
export const GETCITI="getCiti"
export async function getCiti({url,params}){
    const res =await axios.get(url,{params});
    return{
        type:GETCITI,
        cities:res.data.result
    }
}

// 商铺信息
export const GETSHOP="getShop"
export async function getShop({url}){
    const res =await axios.get(url);
    return{
        type:GETSHOP,
        shops:res.data.result
    }
}
// // 商铺内商品信息
// export const GETTAILS="getTails"
// export async function getTails({url}){
//     const res =await axios.get(url);
//     return{
//         type:GETTAILS,
//         tails:res.data.result
//     }
// }
// 搜索商铺
export const GETALLSHOP="getAllShop"
export async function getAllShop({url,params}){
    const res=await axios.get(url,{params});
    return{
        type:GETALLSHOP,
        goods:res.data.result
    }
}

// 获取订单列表
export const  ADDORDER  ="addOrder"
export async  function addOrder({url,params}){
    const res =await axios.post(url,{params});
    console.log(res);
    return{
        type:ADDORDER,
        Orders:res.data.result
    }
}

export const SETNEWURL="setNEWURL"
export const setNewUrl=url=>{
    return{
        type:SETNEWURL,
        url
    }
}


export const SETOLDURL="setOldUrl"
export const setOldUrl=url=>{
    return{
        type:SETOLDURL,
        url
    }
}




