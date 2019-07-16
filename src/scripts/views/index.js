


import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import { Guide } from "./guide";
import { App } from "./app";
import { Login } from "./login";



import PropTypes from "prop-types"
import {connect} from "react-redux"
import { setOldUrl, setNewUrl } from "../actions";
import { City } from "./city";
import { Item } from "../components/item";
import { Detail } from "../components/detail";
import { Integral } from "../components/integral";
import { Confirm } from "./confirmOrder";





export class IndexView extends Component{
    render(){
        return (
            <Router
                basename="/"
            >
                <div id="main">
                    <Route component={Layout}  />
                </div>
            </Router>
        )
    }
}


// 所有路由配置 Layout 
@connect(
    state=>{
       return {
        newUrl:state.myUrl.newUrl
       }
    }
)
export class Layout extends Component{

    render(){
        return (
            <Switch>
                <Route path="/" component={Guide} exact />
                <Route path="/guide" component={Guide}  />
                <Route path="/app" component={App}  />
                <Route path="/city/:cityId?" component={City}  />
                <Route path="/login" component={Login}  />
                <Route path ="/balance/detail" component={Detail} />
                <Route path ="/points/integral" component={Integral} />
                <Route path="/shop/confirmOrder/:name/:aa?" component={Confirm} />     
                <Route path="/:shop?" component={Item}  />         
                <Route 
                    render={
                        ()=> (<Redirect to="/app/home"  />)
                    }
                />
            </Switch>
        )
    }
}

Layout.childContextTypes = {
    history:PropTypes.object.isRequired,
    location:PropTypes.object.isRequired,
    match:PropTypes.object.isRequired,
}
