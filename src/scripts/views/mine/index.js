import "./index.scss";

import {Head} from "~/components/head"
import {ListItem,ListItemText,ListItemAvatar} from '@material-ui/core';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {history} from "&"
import {Tag,List,Icon,Drawer, NavBar,Popover } from 'antd-mobile';
const Item = List.Item;
@connect(
    state=>{
        return {
            
        }
    },
)
export class Mine extends Component{
    state={
        lists:[
            {title:"我的订单",path:"/app/order",icon:"icon-ziyuan"},
            {title:"积分商城",path:"/app/points",icon:"icon-yly_jifenshangcheng"},
            {title:"饿了么会员卡",path:"/",icon:"icon-huangguanguanjundiyihuiyuan"},
            {title:"服务中心",path:"/app/home",icon:"icon-yk_fangkuai_fill"},
            {title:"下载饿了么APP",path:"",icon:"icon-changyonglogo40"},
        ]
    }
    goLogin=()=>{
        history.push("/login")
    }
    shangchuan=()=>{
        console.log("准备上传")
    }
    render(){
        return (
            <div>
               {/* <Head title="我的" show={true} <Pop key="1" />></Head> */}
               <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.goback(show)}
                // style={{backgroundColor:" rgb(16, 142, 233)"}}
                rightContent={[
                    // <Icon key="0" onClick={this.goSearch} type="search" style={{ marginRight: '16px' }} />,
                    <Pop key="1" />
                ]}
                >我的</NavBar>
               <List>
                    <ListItem style={{backgroundColor:"#108ee9",marginBottom: 10}}>
                       <ListItemAvatar>
                            <img onClick src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563435011&di=2b06cf75dca474c4598946d247d9977d&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F09%2F20160809113208_wrTh3.jpeg" alt="" style={{width:100,height:100,borderRadius:"50%"}}/>
                            <input type="file" ref="one" accept="image/*" onChange={this.shangchuan} style={{display:"none"}}/>
                        </ListItemAvatar>
                        <ListItemText onClick={this.goLogin} primary="登录|注册" secondary="暂时没有绑定手机号" style={{display:!sessionStorage.userInfo?"block":"none"}}/>
                        <h2 style={{display:sessionStorage.userInfo?"block":"none",color:"#fff",fontSize:20}}><i className="iconfont icon-icon--" style={{fontSize:30,marginLeft:10}}></i>已绑定手机号</h2>
                    </ListItem>
                </List>
                <div  className="profile"> 
                    <Tag selected className="info-data-link">
                        <Link to={"/app/balance"}>
                            <span>0.00元</span>我的余额
                        </Link>    
                    </Tag>
                    <Tag selected className="info-data-link"><span>0个</span>我的优惠</Tag>
                    <Tag selected className="info-data-link">
                        <Link to={"/app/points"}>
                            <span>0分</span>我的积分
                        </Link>     
                    </Tag>
                </div>   
                {
                    this.state.lists.map((item,i)=>{
                        return(
                        <Link to={item.path} key={i}>
                            <Item  arrow="horizontal" onClick={() => {}}><i className={"iconfont icon " +item.icon}></i>{item.title}</Item>
                        </Link> 
                        )
                    })
                }
            </div>
        )
    }
}

export class Pop extends Component{
    state={
        visible:false,
        selected:""
      }
      onVisibleChange=(visible)=>{
           this.setState({
            visible
           })
      }
      onSelect = (opt) => {
        console.log(opt);
        this.setState({
            visible: false,
            selected: opt.props.value,
        })
        if(opt.props.value=="login"){
           this.gotoLogin()
        }
        if(opt.props.value=="scan"){
           history.push("/scan")
        }
    }
    gotoLogin=()=>{
     sessionStorage.removeItem('userInfo')
     history.push("/login")
    }
  render(){
    return(
        <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan"  data-seed="logId"><i className="iconfont icon icon-richscan_icon"></i>扫一扫</Item>),
              (<Item key="5" value="login"   style={{ whiteSpace: 'nowrap' }}><i className="iconfont icon icon-zhaoxiang"></i>照相</Item>),
              (<Item key="6" value="button ct" onClick={this.gotoLogin}>
                <span style={{ marginRight: 5 }}><i className="iconfont icon icon-zhuxiao"></i>注销</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
    )
  }
}
// const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
