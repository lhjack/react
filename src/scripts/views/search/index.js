import "./index.scss";

import {Head} from "~/components/head"
import {SearchBar} from "antd-mobile"

import {connect} from "react-redux"
import { getAllShop } from "../../actions";
import { Good } from "../../components/good";


@connect(
    state=>{
        return {
           goods:state.data.goods
        }
    }
)
export class Search extends Component{
    submit=(val)=>{
        console.log(val)
        const {dispatch}=this.props
        dispatch(getAllShop({
            url:"/react/getShop",
            params:{
                content:val
            }
        }))
        // this.state.sears.push({
        //     val
        // })
        // this.setState({
        //     sears:this.state.sears,
        //     show:true
        // })
    }
    // state={
    //     sears:[],
    //     show:false
    // }
    render(){
        console.log(this.state)
        // const {
        //     sears,
        //     show
        // }=this.state
        return (
            <div>
                <Head title="搜索" show={true} ></Head>
                <SearchBar 
                placeholder="请输入商家或美食名称" 
                maxLength={8} 
                onSubmit={this.submit}
                onChange={this.change}
                />
               <Good items={this.props.goods}></Good>
               {/* {!show&&<div>
                   <h2 style={{fontSize:20,color:"#666",lineHeight:2,marginLeft:16}}>搜索历史</h2>
                   {
                       sears.map((item,i)=>{
                           return(
                               <div key={i}>
                                   <span>{item}</span>
                               </div>
                           )
                       })
                   }
               </div>} */}
            </div>
        )
    }
}