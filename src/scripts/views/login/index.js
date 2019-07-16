

import "./index.scss"
import { Head } from "../../components/head";
import { WingBlank, WhiteSpace,List,InputItem,Button } from 'antd-mobile';
import {axios} from "&"
import {history} from "&"
import userInfo from "~/mobx/userInfo"
import {observer} from "mobx-react"
export const mobileReg=/^1(3|5|7|8|9)\d{9}$/
export const codeReg=/^\d{4}$/
let timer = null

@observer
export class Login extends Component{
    state={
        mDisable:true,
        cDisable:true,
        txt:"获取验证码",
        count:60,
        flag:true
    }
    getMobile=(mobile)=>{
        console.log(this.mobile.state.value)
        if(this.state.flag){
            this.setState({
                mDisable:!mobileReg.test(mobile)
             })
        }
        this.setState({
            cDisable:!(mobileReg.test(mobile)&&codeReg.test(this.code.state.value))
        })
    }
    getCode=()=>{
         axios.post("/react/sendCode",{
            mobile:this.mobile.state.value
         }).then(res=>{
             
         })
         timer=setInterval(()=>{
            if(this.state.count>0){
                 this.setState({       
                    count:--this.state.count,
                    txt:'倒计时'+this.state.count+"s",     
                    mDisable:true,
                    flag:false,    
                });         
            }else{
                clearInterval(timer);
                this.setState({
                    count:60,
                    txt:"获取验证码",
                    mDisable:false,
                    flag:true,
                    mDisable:!mobileReg.test(this.mobile.state.value)
                })     
            }
        },1000)
     
    }
    checkCode=(code)=>{
        this.setState({
            cDisable:!(mobileReg.test(this.mobile.state.value)&&codeReg.test(code))
        })
    }
    loginAuth=()=>{
        axios.post("/react/checkCode",{
            mobile:this.mobile.state.value,
            code:this.code.state.value
        }).then(res=>{
            console.log(res)
            if(!!res.data.type){
                var token=res.data.token;
                sessionStorage.userInfo=JSON.stringify({token});
                history.push("/app/mine")
                userInfo.getInfo(
                    {token},
                    true,
                    this.mobile.state.value
                )
            }else{
                sessionStorage.userInfo=""
                userInfo.getInfo(
                    {},
                    false,
                    ""
                )
            }
        })
    }
    render(){
        const {
            mDisable,
            cDisable,
            txt
        }=this.state
        return(
            <div>
                <Head title="登录" show={true}></Head>
                <WhiteSpace />
                <WingBlank>
                    <List>
                    <InputItem 
                     type="tel"
                     placeholder="请输入手机号"
                     clear
                     ref={el=>this.mobile=el}
                     onChange={this.getMobile}
                    >手机号</InputItem>
                    <WhiteSpace />
                     <InputItem 
                     type="number"
                     placeholder="请输入验证码"
                     clear
                     ref={el=>this.code=el}
                     onChange={this.checkCode}
                    >验证码
                    </InputItem>
                    <Button type="warning" onClick={this.getCode} disabled={mDisable} className="l-btn" inline>{txt}</Button>
                    <Button type="primary" disabled={cDisable} onClick={this.loginAuth} >登录</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}