


import "./index.scss"
import {Head} from "~/components/head";
import { List,Tag} from 'antd-mobile';
import {axios}  from "&"
import {connect} from  "react-redux"
import { getCiti } from "../../actions";
import {Link} from "react-router-dom"
import {history}  from "&"
const Item = List.Item;
const Brief = Item.Brief;

@connect(
    state=>{
        return{
            cities:state.data.cities
        }
    }
)
export class Guide extends Component{
    componentWillMount(){
    }
    state = {
        disabled: false,
        props:["北京","上海","深圳","广州","南京","青岛","厦门","杭州"],
        guess:"武汉"
    }
    goCity=(guess)=>{
        history.push("/city/cityId"+"?title="+guess)
    }
    render(){
        console.log(this.state)
        const {
            props,
            guess
        }=this.state
        return (
            <div className="box">
                <Head title=""></Head>
                <List className="my-list">
                    <Item extra={'定位不准时，请在城市列表中选择'}>当前城市定位:</Item>
                </List>  
                <List  className="my-list">
                    <Item  arrow="horizontal" onClick={() => {this.goCity(guess)}}>{guess}</Item>
                </List> 
                <div className="hot_city_container">
                    <List className="am-list" style={{fontSize:2}}>
                        <Item>热门城市</Item>
                    </List> 
                   {
                        props.map((item,i)=>{
                            return(
                                <Link to={"/city/cityId"+"?title="+item} key={i}>
                                   <Tag selected >{item}</Tag>
                                </Link>  
                            ) 
                        })
                   }
                </div>    
            </div>
        )
    }
}