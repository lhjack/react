import { Head } from "../../components/head";
import demo from "~/mobx/demo"
import {observer} from "mobx-react"
import {connect} from "react-redux";
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import {ListItem,ListItemText,ListItemAvatar} from '@material-ui/core';
import { addOrder } from "../../actions";

console.log("****")
console.log(demo)
@connect(
    state=>{
        return{
            Oredrs:state.data.Oredrs
        }
    }
)
// @observer
export class Oredr extends Component{
    componentDidMount(){
        var userInfo=sessionStorage.userInfo
        var token=""
        if(userInfo){
            token=JSON.parse(userInfo).token
        }  
        if(token){
            demo.addOrder(token)       
        }
        // let {dispatch,Oredrs}=this.props;
        // if(Oredrs.length<=0){
        //     dispatch(addOrder({
        //         url:"/react/getOrder",
        //         params:{
        //             username:token
        //         }
        //    }))
        // }
    }
    render(){
        console.log(this.props);
        const {Orders} = demo;
        return(
            <div>
                <Head title="订单列表" show={true}></Head>
                {
                    Orders.map((item,i)=>{
                           return(
                               <div key={i} style={{lineHeight:4,backgroundColor:"#fff",borderBottom:"8 solid #f5f5f5",width:"100%",textOverflow:"ellipsis"}}>
                                     <ListItem>
                                            {
                                                item.name.map((item,i)=>{
                                                    return(
                                                        <div >
                                                            <ListItemAvatar>
                                                                <h2 >{item.name+"+"}</h2>
                                                            </ListItemAvatar>
                                                        </div>
                                                    )  
                                                })
                                            }
                                        <ListItemText secondary={"￥"+item.total}/>
                                        {/* <ListItemText primary={item.delivery_mode.text} secondary={item.distance+"/"+item.order_lead_time} /> */}
                                    </ListItem>
                               </div>
                           )
                    })
                }
               {demo.flng&&<NoticeBar mode="closable" >
                        快去点餐吧！
                </NoticeBar>}
            </div>
        )
    }
}