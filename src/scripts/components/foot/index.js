

import "./index.scss";

import {NavLink} from "react-router-dom";
export const foots = [
    {txt:"外卖",path:"/app/home",name:"home",icon:"icon-ziyuan"},
    {txt:"搜索",path:"/app/search",name:"search",icon:"icon-compasszhinanzhen"},
    {txt:"订单",path:"/app/order",name:"order",icon:"icon-order"},
    {txt:"我的",path:"/app/mine",name:"mine",icon:"icon-wode"}
];

import {Badge} from "antd-mobile"


export class Foot extends Component{
    state = {
        foots
    }
    render(){
        const {
            foots
        }  = this.state;
        return (
            <footer>
                {
                    foots.map((foot,i)=>{
                        return (
                            <div key={i}>
                                <NavLink to={foot.path} activeClassName="nav-active">
                                    <i className={"iconfont icon " +foot.icon}> </i>
                                    <span> {foot.txt}</span>
                                    {i==2&&<Badge  className="hot" text="10" hot style={{ marginLeft: 12 }} />}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}