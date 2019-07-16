import { Head } from "../../components/head";
import { Card, WingBlank, WhiteSpace,Button } from 'antd-mobile';
import {history} from "&"
export class Points extends Component{
    goPoin=()=>{
        history.push("/points/integral")
      }
    render(){
        return(
            <div>
                <Head title="我的积分" show={true}></Head>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                        // title="当前余额"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span style={{color:"#108ee9"}} onClick={this.goPoin}><i className="iconfont icon-iconset0143" style={{fontSize:18}}></i>积分说明</span>}
                        />
                         <Card.Body>
                        <div>当前积分</div>
                         </Card.Body>
                        <Card.Footer content="0分" extra={<div></div>} style={{fontSize:40,marginBottom:20,color:"#333"}}/>
                        <Button type="primary"  style={{backgroundColor:"#fe6d47"}}>积分兑换商品</Button>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <p style={{color:"#999",lineHeight:4,paddingLeft:4,fontSize:14}}>最近30天积分纪录</p>
                <div>
                   <h2 style={{marginTop:100,marginLeft:104,fontSize:20,color:"#666"}}>最近30天无积分记录</h2>
                   <h2 style={{marginTop:10,marginLeft:114,fontSize:14,color:"#999"}}>快去下单赚取大量积分吧</h2>
                </div>
            </div>
        )
    }
}