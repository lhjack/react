
import {Link} from "react-router-dom"
import {ListItem,ListItemText,ListItemAvatar} from '@material-ui/core';
export class Good extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {
                    this.props.items.map((item,i)=>{
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
            </div>
        )
    }
}