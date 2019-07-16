

import {Button,WhiteSpace,NavBar,Icon,Popover} from "antd-mobile"
import "./index.scss";
import PropTypes from "prop-types"
import {history} from "&"
const Item = Popover.Item;
import {connect} from "react-redux"
import { setTab } from "../../actions";



@connect(
    state=>{
        return {
            oldUrl:state.myUrl.oldUrl
        }
    }
)
export class Head extends Component{
    gotoLogin=()=>{
        history.push("/login")
    }
    goback=(show)=>{
        if(show){
            history.go(-1);
            const {oldUrl}=this.props
            this.props.dispatch(setTab(oldUrl))
        }
    }
    render(){
        const {
            show,
            title
        }=this.props
        return (
           <div>
                <NavBar
                    leftContent={!show&&"ele.me"}
                    onLeftClick={()=>this.goback(show)}
                    icon={show&&<Icon type="left" />}
                    rightContent={!show&&[
                        <h2 onClick={this.gotoLogin}>登录</h2>
                    ]}
                >{title}</NavBar>
           </div>
        )
    }
}

Head.propTypes = {
    title:PropTypes.string.isRequired
}
