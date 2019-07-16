import "./index.scss";

import {Switch,Route,Redirect} from "react-router-dom"
import { Home } from "../home";
import { Mine } from "../mine";
import { MFoot } from "../../components/mFoot";
import { Search } from "../search";
import { Oredr } from "../order";
import { Balance } from "../balance";
import { Points } from "../points";

export class App extends Component{
    render(){
        return (
            <div className="box">
                
                <Switch>
                    <Route path="/app/home" component={Home} />
                    <Route path="/app/search" component={Search} />
                    <Route path="/app/order" component={Oredr} />
                    <Route path="/app/mine" component={Mine} />
                    <Route path="/app/balance" component={Balance}  />
                    <Route path="/app/points" component={Points}  />   
                    <Route render={
                        ()=>(<Redirect to="/app/home" />)
                    } />
                </Switch>
                <MFoot/>
            </div>
        )
    }
}