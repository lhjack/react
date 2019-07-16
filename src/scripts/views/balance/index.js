import { Head } from "../../components/head";
import { Card, WingBlank, WhiteSpace,Button } from 'antd-mobile';
import {history} from "&"
export class Balance extends Component{
    goBala=()=>{
        history.push("/balance/detail")
      }
    render(){
        return(
            <div>
                <Head title="我的余额" show={true}></Head>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                        // title="当前余额"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span style={{color:"#108ee9"}} onClick={this.goBala}><i className="iconfont icon-iconset0143" style={{fontSize:18}}></i>余额说明</span>}
                        />
                         <Card.Body>
                        <div>当前余额</div>
                         </Card.Body>
                        <Card.Footer content="0:00元" extra={<div></div>} style={{fontSize:40,marginBottom:20,color:"#333"}}/>
                        <Button type="primary" disabled>提现</Button><WhiteSpace />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <p style={{color:"#999",lineHeight:4,paddingLeft:4,fontSize:14}}>交易明细</p>
                <div>
                   <h2 style={{marginTop:100,marginLeft:104,fontSize:20,color:"#666"}}>最近30天无交易记录</h2>
                </div>
            </div>
        )
    }
}