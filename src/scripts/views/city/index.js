
import { NavBar, Icon,SearchBar } from 'antd-mobile';
import {history} from "&"
import "./index.scss"
import {getQuery} from "&"
import {connect} from "react-redux"
import { getCiti } from '../../actions';

@connect(
    state=>{
        return{
            cities:state.data.cities
        }
    }
)
export class City extends Component{
    gotoGui=()=>{
        history.push("/")
    }
    submit=(val)=>{
        console.log(val)
        this.props.dispatch(getCiti({
            url:"/react/getCitys",
            params:{
               keyword:val
            }
        }))
    }
    goback=()=>{
        history.go(-1)
    }
    login=()=>{
        history.push("/app/home")
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.goback}
                    rightContent={[
                        <Icon onClick={this.gotoGui}>切换城市</Icon>
                    ]}
                >{new URLSearchParams(this.props.location.search).get("title")}</NavBar>
                <div className="city_form">
                    <SearchBar placeholder="输入地名、区域、地址" maxLength={8} onSubmit={this.submit}/>
                </div>
                <h2 onClick={this.login} style={{fontSize:20,marginLeft:10}}>本功能，尚未完成,请点击跳转主页面=></h2>  
            </div>
        )
    }
}