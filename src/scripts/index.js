

console.log("这是 js 主入口");

import ReactDOM , {render} from "react-dom"
import {IndexView} from "./views"

const rootEle = document.getElementById("app");

import {Provider} from "react-redux";
import store from "./store"
const hotRender = ()=>{
    render(
        <Provider store={store}>
            <IndexView/>
        </Provider>  ,
        rootEle
    )   
}

hotRender();

// import "./redux"

// import "./reactredux"