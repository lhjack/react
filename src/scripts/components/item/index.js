import { Head } from "../head";
import "./index.scss"
import { Tabs, WhiteSpace,Carousel} from 'antd-mobile';
import { Sort } from "../sort";
import {connect} from "react-redux"
import {observer} from "mobx-react"
import car from "~/mobx/car"

@connect(
    state=>{
        return{
        //    tails:state.data.tails
        }
    }
)
@observer
export class Item extends Component{
    componentWillMount(){
        // const {dispatch,tails} =this.props
        // if(tails.length<=0){
        //     dispatch(getTails({
        //         url:"/react/allTail"
        //     }))
        // }
        car.getTails();
    }
    state={
        banner:[
            {txt:"",path:"",img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4182537263,2699617798&fm=26&gp=0.jpg"},
            {txt:"",path:"",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562758812737&di=5f28e12f9e35ae76975332b365db7528&imgtype=0&src=http%3A%2F%2Fdata.5ikfc.com%2Fstatic%2Fdiscount%2Fmdl%2F15%2Fmdl-event-527_03.jpg"},
            {txt:"",path:"",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563353518&di=35bd80e1b2a5802dafdc60f9ee520280&imgtype=jpg&er=1&src=http%3A%2F%2Fdata.5ikfc.com%2Fstatic%2Fdiscount%2Fmdl%2F15%2Fmdl-event-71_02.jpg"},
            {txt:"",path:"",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562758783270&di=a161dfe54bdf00473644eff864b566f6&imgtype=0&src=http%3A%2F%2Fimg.8bears.com%2Fuploads%2Fallimg%2F100226%2F36_100226111102_3.jpg"},
        ]
    }
    render(){
        console.log(new URLSearchParams(this.props.location.search))
        const{
            tails
        }=car
        return(
            <div>
               <Head title={new URLSearchParams(this.props.location.search).get("name")} show={true} ></Head> */}
               <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563354317&di=7db4d24f77197d9b547a1e9c39bafb92&imgtype=jpg&er=1&src=http%3A%2F%2Fwx4.sinaimg.cn%2Forj360%2Fa8946668ly1fucfbi3uehj20rs0rsn1t.jpg" alt="" className="word"/>
               <div>
                   <img src="https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png" alt="" style={{width:100,height:100,position:"absolute",top:192,left:150}}/>
               </div>
               <Carousel
                        autoplay={false}
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                        >
                        {
                            this.state.banner.map((item,i)=>{
                                return(
                                    <a key={i} to="/" style={{ display: 'inline-block', width: '100%', height: this.props.imgHeight,marginTop:234}}>
                                        <img
                                            src={item.img}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top',height:200 }}
                                            onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                            }}
                                        />
                                    </a>
                                )
                            })
                  
                        }
                </Carousel>
                <Sort tails={tails} name={new URLSearchParams(this.props.location.search).get("name")}/>
            </div>
        )
    }
}