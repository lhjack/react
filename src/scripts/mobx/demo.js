import {axios}  from "&"
import {observable,action,computed} from "mobx"
import {history} from "&"

// mobx 观察者模式
// @observable count 表明这个数据是 可观察数据
// @action 发出的通知 通过mobx 修改数据 可观察数据
class Demo{
  @observable count=1902
  @observable city="今天星期四"
  @observable Orders=[]
  @observable name=null

  @action countAddBox=()=>{
    console.log("abcd")
    this.count +=10;
  } 

  @action countDesc =count =>{
    this.count -= count;
  }

  @action changeCity=(city)=>{
      this.city=city
  }

  //购买成功，加入订单
  @action Order=(name,total,username)=>{
    console.log(name,total,username)
    axios.post("/react/addOrder",{
          name,
          total,
          username
    }).then(res=>{
         axios.post("/react/tosh",{
              username
         }).then(res=>{
             history.push("/app/order")
         })
    })
  }

  // 获取订单
  @action addOrder=(username)=>{
    axios.post("/react/getOrder",{
      username
    }).then(res=>{
        this.Orders=res.data.result
        // res.data.result.forEach((item,i)=>{
        //     //  console.log(item)
        //      this.name=item.name
        // })
    })
  }
}

export default new Demo();