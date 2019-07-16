import "./index.scss";

import {Head} from "~/components/head";
import {axios} from "&";
import {Link} from "react-router-dom";
import {Carousel,NoticeBar,Accordion,List} from 'antd-mobile'
import {connect} from "react-redux"
import { getbanner } from "../../actions";
import { Shop } from "../../components/shop";

export class Home extends Component{
    state={
        banner:[
            {txt:"甜品饮品",path:"",img:"https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg"},
            {txt:"商超便利",path:"",img:"https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg"},
            {txt:"美食",path:"",img:"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg"},
            {txt:"简餐",path:"",img:"https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg"},
            {txt:"新店特惠",path:"",img:"https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg"},
            {txt:"准时达",path:"",img:"https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg"},
            {txt:"预订早餐",path:"",img:"https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg"},
        ]
    } 
   
    render(){
        return (
            <div>
                <Head title="首页" show={!sessionStorage.userInfo?"false":"turn"}></Head>
                <Carousel
                        autoplay={true}
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                        >
                        {
                            this.state.banner.map((item,i)=>{
                                return(
                                    <Link key={i} to="/" style={{ display: 'inline-block', width: '100%', height: this.props.imgHeight }}>
                                        <img
                                            src={item.img}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top',height:300 }}
                                            onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                            }}
                                        />
                                    </Link>
                                )
                            })
                  
                        }
                </Carousel>
                <Shop />
            </div>
        )
    }
}