
import { Tabs,Button,Toast,Modal} from 'antd-mobile';
import "./index.scss"
import {history} from "&"
import car from "~/mobx/car"
import {connect} from "react-redux"
import {observer} from "mobx-react"
import userInfo from "~/mobx/userInfo"
// console.log(userInfo.carts)
const alert = Modal.alert;
const showAlert = () => {
    const alertInstance = alert('登录提示', '你还有登录哟？~~', [
      { text: '我不登录', onPress: () => console.log('cancel'), style: 'default' },
      { text: '马上登录', onPress: () =>  history.push("/login") },
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 500000);
  };

@observer
export class Sort extends Component{
    // componentWillMount(){
    //     console.log(userInfo.carts)
    //    
    // }
    state={
       word:false,
       counts:null
    }
    addTo=(e)=>{
        console.log(e)
        car.addTo(e)
        userInfo.addToCar(car.name,car.a,car.b,this.props.name,e);
        userInfo.ToCart(car.name,car.a,this.props.name)

    }
    Toback=(e)=>{
        // console.log(e)
        car.Toback(e)  
        userInfo.ToCart(car.name,car.a,this.props.name)
    }
    addTos=(e)=>{
        // console.log(e)
        userInfo.addTos(e)
        userInfo.ToCart(car.name,car.a,this.props.name)

    }
    Tobacks=(e)=>{
        // console.log(e)
        userInfo.Tobacks(e)
        userInfo.ToCart(car.name,car.a,this.props.name)
    }
    delSelect=(shop)=>{
        userInfo.delSelect(car.name,car.a,shop)

        // userInfo.ToCart(car.name,car.a,this.props.name)
    }
    cart=()=>{
        userInfo.flng=!userInfo.flng  
        userInfo.addCart(this.props.name)
        userInfo.ToCart(car.name,car.a,this.props.name)
    }
    goOrder=()=>{
        var userInfo=sessionStorage.userInfo
        var token=""
        if(userInfo){
            token=JSON.parse(userInfo).token
        }
        if(token){
            history.push("/shop/confirmOrder/name/aa?"+"name="+this.props.name)
        }else{
            showAlert()
        }  
    }
    render(){
        // console.log(this.state)
        const{
            tails
        }=this.props
        const {
            flng,
            count,
            // price,
            // sun,
            wores,
            // // addTo,
            // // Toback,
            toflng,
            total,
            carts
        }=car
        return(
            <div>
                <Tabs tabs={tails}
                    initialPage={0}
                    tabBarPosition="left"
                    renderTab={tails=> <span style={{height:20}}>{tails.category_id}</span>}
                    >
                    {
                        tails.map((item,i)=>{
                            return(
                                <div key={i} style={{textAlign:"center",height: '300px', backgroundColor: '#fff',display:"flex",alignItems: 'center'}}>
                                    <img src={item.image_path} alt="" style={{display:"inline",height:100,marginLeft:20}}/>
                                    <div style={{marginLeft:20}}>
                                        <h2 style={{fontSize:16}}>{item.name}</h2><br />
                                        <p style={{marginBottom:10}}>{item.tips}</p>
                                        <div style={{fontSize:14,color:"red"}}>
                                            <span>￥{item.satisfy_rate}</span> 
                                            {item.is_essential&&<i className="iconfont icon-jian" style={{color:"blue",paddingLeft:40}}  onClick={()=>this.Toback(item.category_id)}><span style={{marginLeft:20}}>{item.count}</span></i>}
                                            <i className="iconfont icon-jia" style={{color:"blue",marginLeft:20}}  onClick={()=>this.addTo(item.category_id)}></i>       
                                        </div>
                                    </div>   
                                </div>
                            )
                        })
                    }
                     
                </Tabs>
                {userInfo.flng&&<div className="screen">
                          <div className="cart-list">
                             <header>
                                <h2 style={{color:"#666",fontSize:20,width:"82%",marginLeft:10}}>购物车</h2>
                                <span style={{fontSize:14}}  onClick={()=>this.delSelect(this.props.name)}>删除</span>
                             </header>
                             {
                                userInfo.carts.map((item,i)=>{
                                    return(
                                        <div key={i} className="cart-food box-cart">
                                            <h2 style={{fontSize:16}}>{item.name}</h2>
                                            <h2 style={{color:"red",left:236,position:"absolute"}}>￥{item.pirce}</h2>
                                            <div style={{left:250,position:"absolute"}}>
                                                <i className="iconfont icon-jian" style={{color:"blue",paddingLeft:40}} onClick={()=>this.Tobacks(item.id)}>
                                                    <span style={{position:"absolute",right:-26}}>{item.count}</span>
                                                </i>
                                                <i className="iconfont icon-jia" style={{color:"blue",position:"absolute",right:-52}}  onClick={()=>this.addTos(item.id)}></i>   
                                           </div>                                            
                                        </div>
                                    ) 
                                })
                             }
                          </div>     
                    </div>}
                <div className="cart">
                    <div className="container" style={{backgroundColor:userInfo.toflng?"#3190e8":""}} onClick={()=>this.cart(userInfo.flng)}>                      
                        <i className="iconfont icon-gouwuchekong" style={{fontSize:28,color:"#fff"}}></i>
                            {userInfo.toflng&&<span>{userInfo.add}</span>}
                    </div>
                    <div className="cart_num">
                            <span style={{fontSize:20}}>￥{userInfo.total}.00</span><br/>
                            <span style={{marginTop:20}}>配送费￥5</span>
                    </div>
                    {userInfo.sun&&<Button disabled inline className="gotopay" style={{position:"absolute",bottom:0,right:0,backgroundColor:"#535356",height:"100%",width:150,color:"#fff"}}>还差￥{wores-total}起送</Button>}
                    {!userInfo.sun&&<Button onClick={this.goOrder} inline className="gotopay" style={{position:"absolute",bottom:0,right:0,backgroundColor:"#4cd964",height:"100%",width:150,color:"#fff"}}>去结算</Button>}
                </div>
            </div>
        )
    }
} 
