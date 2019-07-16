
import {TabBar } from "antd-mobile"
import {foots} from "../foot";

import "./index.scss";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types"
import {history} from "&"
import {connect} from "react-redux"
import { setTab, setNewUrl } from "../../actions";

@connect(
    state=>{
        console.log(state);
        return {
            tab:state.myUrl.tab
        }
    }
)
export class MFoot extends Component{
    componentWillMount(){
        const hash=location.hash;
        const tab =hash.replace("#/app/","")
        console.log(tab)
        console.log(location)
        this.props.dispatch(setTab(tab))
        this.props.dispatch(setNewUrl(tab))
    }
    state = {
        foots,
    }

    render(){
        return (
            <div className="mfoot">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"  
            > 
                {
                    this.state.foots.map((foot,i)=>{
                        return (
                            <TabBar.Item
                                title={foot.txt}
                                key={i}
                                icon={<i style={{
                                width: '22px',
                                height: '22px',
                                display:"block"
                                }}
                                className={"iconfont icon " + foot.icon}
                                />
                                }
                                selectedIcon={<i style={{
                                width: '22px',
                                height: '22px',
                                display:"block" }}
                                className={"iconfont icon " + foot.icon}
                                />
                                }
                                // selected={this.state.selectedTab === foot.name }
                                selected={this.props.tab === foot.name }

                                // badge={i==2}
                                onPress={() => {
                                    // console.log(this.context);
                                    this.props.dispatch(setTab(foot.name))
                                    history.push(foot.path);
                                }}
                                data-seed="logId"
                            >
                                {/* {this.renderContent(foot.name,foot.path)} */}
                            </TabBar.Item>
                        )
                    })
                }
            </TabBar>
        </div>
        )
    }
}

MFoot.contextTypes={
    history:PropTypes.object.isRequired,
    location:PropTypes.object.isRequired,

}