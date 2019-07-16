import { Head } from "../../components/head";
import {ListItem,ListItemText,ListItemAvatar, Slide} from '@material-ui/core';
import "./index.scss"
import userInfo from "~/mobx/userInfo"
import {observer} from "mobx-react"
import { List,Button,Modal} from 'antd-mobile';
import demo from "~/mobx/demo"
const Item = List.Item;
const alert = Modal.alert;


@observer
export class Confirm extends Component{
    componentWillMount(){
        userInfo.addCart(new URLSearchParams(this.props.location.search).get("name"))
    }
    Confirm=()=>{
        const alertInstance = alert('支付提示', '是否支付？~~', [
            { text: '不支付', onPress: () => console.log('cancel'), style: 'default' },
            { text: '支付', onPress: () => this.Order(userInfo.carts,userInfo.total+46) },
          ]);
          setTimeout(() => {
            // 可以调用close方法以在外部close
            console.log('auto close');
            alertInstance.close();
          }, 500000);
    }
    Order=(name,total)=>{
        var userInfo=sessionStorage.userInfo
        var token=""
        if(userInfo){
            token=JSON.parse(userInfo).token
        }
        demo.Order(name,total,token)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <Head title="确认订单" show={true}></Head>
                  <ListItem className="delivery">
                        <ListItemAvatar>
                            <h2 style={{fontSize:20,fontWeight:40}}>送达时间</h2>
                        </ListItemAvatar>
                        <ListItemText primary="尽快送达 | 预计 12:46" secondary="蜂鸟专送" style={{fontSize:16,marginLeft:40,color:"#3190e8"}}/>
                  </ListItem>
                <List style={{marginTop:10}}>
                    <Item extra="在线支付" arrow="horizontal" >支付方式</Item>
                    <Item extra="暂时只在饿了么 APP 中支持">红包</Item>
                </List> 
                <h2 style={{color:"#333",lineHeight:4,paddingLeft:12,marginTop:18,fontSize:14,borderBottom:"4px solid #f5f5f5",backgroundColor:"#fff"}}>{new URLSearchParams(this.props.location.search).get("name")}</h2>
                {
                    userInfo.carts.map((item,i)=>{
                        return(
                            <div key={i} style={{display:"flex",lineHeight:4,fontSize:10,backgroundColor:"#fff"}}>
                                <h2 style={{color:"#666",paddingLeft:12}}>{item.name}</h2>
                                <h2 style={{left:300,color:"#f60",position:"absolute",}}>X{item.count}</h2>
                                <h3 style={{color:"#666",left:340,position:"absolute"}}>￥{item.pirce}</h3>
                            </div>   
                        )
                    })
                }
                <List style={{fontSize:14,color:"#333"}}>
                    <Item extra="￥40">餐盒</Item>
                    <Item extra="￥6" style={{borderBottom:"4px solid #f5f5f5"}}>配送费</Item>                    
                </List>
                <div style={{display:"flex",position:"fixed",bottom:0,left:0,backgroundColor:"#3c3c3c",width:"100%"}}>
                    <h2 style={{color:"#fff",lineHeight:4,marginLeft:10,width:200}}>待支付 ¥{userInfo.total+46}</h2>
                    <Button onClick={this.Confirm} inline  style={{backgroundColor:"#56d176",marginLeft:62}}>确认下单</Button>
                </div>
            </div>
            
        )
    }
} 