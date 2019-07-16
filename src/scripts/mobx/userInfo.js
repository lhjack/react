import {observable,action,computed} from "mobx"
import {axios}  from "&"
import {history} from "&"



class UserInfo{
   @observable userInfo={};
   @observable isLogin=false;
   @observable mobile="";
   @observable carts=[]
   @observable flng=false
//    @observable   sun=true
   @observable  staet={}

//    @action getInfo =(userInfo,isLogin,mobile)=>{
//        this.userInfo=userInfo;
//        this.isLogin=isLogin;
//        this.mobile=mobile
//    }
    // 加入购物车
   @action addToCar=(name,count,pirce,shop,id)=>{
    //    console.log(name,count,pirce,shop)
        var userInfo=sessionStorage.userInfo
        var token=""
        if(userInfo){
            token=JSON.parse(userInfo).token
        }
        if(token){
            axios.post("/react/addToCar",{ 
                name,
                count,
                pirce,
                shop,
                id,
                token
          }).then(res=>{
             console.log(res);
            axios.post("/react/getCart",{
                shop
            }).then(res=>{
                 this.carts=res.data.result
                // this.sun=false
            }) 
          })
        }else{
            history.push("/login")
        }
   }

  // 获取购物车
   @action addCart=(shop)=>{
    console.log(shop)
       axios.post("/react/getCart",{
           shop
       }).then(res=>{
            this.carts=res.data.result
       })  
   }
   // 更新购物车
   @action ToCart=(name,count,shop)=>{
    console.log(name,count,shop)
       axios.post("/react/toCart",{
           name,
           count,
           shop        
       }).then(res=>{
        //   this.sun=false
       })
   }
// 删除
   @action delSelect=(name,count,shop)=>{
    console.log(shop)
     axios.post("/react/toDelete",{
         shop
     }).then(res=>{
        // this.sun=false
     })
   }

   @action addTos=(id)=>{
       console.log(id)
      this.carts=this.carts.map((item)=>{
          if(item.id==id){
              item.count +=1
          }
          return item
      })
   }

   @action Tobacks=(id)=>{
    console.log(id)
    this.carts=this.carts.map((item)=>{
       if(item.id==id){      
          if(item.count>1){
            item.count -=1
          }
          axios.post("/react/toCart",{
              count: item.count,
              name  : item.name,
              shop :  item.shop
          }).then(res=>{

          })
       }
       return item
   })
}

@computed get total(){
    var total=0;
    this.carts.forEach((item)=>{
        total +=item.pirce*item.count
    })
    return total;
}

@computed get add(){
    var add=0;
    this.carts.forEach((item)=>{
        add +=item.count
    })
    return add;
}
@computed get toflng(){
    var flng =false;
    this.carts.forEach((item)=>{
        if(item.count>0){
            flng =true
        }
    })
    return flng
}

@computed get  sun(){
   var sun=true;
   var total=0;
   this.carts.forEach((item)=>{
    total +=item.pirce*item.count
       if(total>20){
           sun=false
       }
   })
   return sun
}
}

export default new UserInfo();