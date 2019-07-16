import { getShop } from "../../actions";
import {connect} from "react-redux";
import "./index.scss";
import {Link} from "react-router-dom"
import {ListItem,ListItemText,ListItemAvatar} from '@material-ui/core';
@connect(
    state=>{
        return{
            shops:state.data.shops
        }
    }
)
export class Shop extends Component{
    componentWillMount(){
        let {dispatch,shops}=this.props;
        if(shops.length<=0){
            dispatch(getShop({
                url:"/react/allShop"
           }))
        }
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>附近商家</h2>          
                {
                    this.props.shops.map((item,i)=>{
                        return(
                            <Link to={"/shop"+"?name="+item.name+"&img="+item.image_path}>
                                <ListItem  className="box-enter">
                                    <ListItemAvatar>
                                        <img src={item.image_path} alt="" style={{width:100,height:80}}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.name} secondary={item.rating+"分/"+item.recent_order_num+"单"}/>
                                    <ListItemText primary={item.delivery_mode.text} secondary={item.distance+"/"+item.order_lead_time} />
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <div style={{width:"100%",height:60}}></div>
            </div>
        )
    }
}