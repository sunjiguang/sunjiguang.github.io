
import axios from "axios"
import {Toast} from "vant"
import router from "../router"


// axios 设置基本路径  

let token = "";
const baseURL = "http://localhost:3000";
// axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['token'] = token;  // 设置请求头里面的 token 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 设置POST提交数据的文档类型编码


function showLoading(){
    Toast.clear();
    Toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner",
        duration: 10000
    });
}

function success(msg){
    Toast.clear();
    Toast.success({
        message:msg,
        duration:600
    });
}

function fail(msg){
    Toast.clear();
    Toast.fail({
        message:msg,
        duration:600
    });
}

// Interceptors 拦截器 
// Add a request interceptor (添加请求的拦截器 发送之前要做业务逻辑)
axios.interceptors.request.use(function (config) {
    // Do something before request is sent(请求发送之前)
    token = sessionStorage.token || token;
    config.headers.token = token;   // 客户端发送 token  到服务器  绑定到 req.headers

    showLoading();
    return config;
  }, function (error) {
    // Do something with request error(请求发送失败)
    fail("请求失败")
    return Promise.reject(error);
});
// Add a response interceptor (添加响应的拦截器 服务器响应数据到客户端之前)
axios.interceptors.response.use(function (response) {
    // Do something with response data(响应成功业务逻辑)
    setTimeout(()=>{
        // 没有type  直接就是 success 
        if(response.data.type===1){  // 1 表示 成功  0 表示失败  
            success(response.data.msg||'请求数据成功');
        }else{
            if(response.data.type===0){
                fail(response.data.msg||'请求数据失败');
            }else{
                success(response.data.msg||'请求数据成功');
            }
        }

        if(response.data.code=="3000"){
            router.push({name:"login"})
        }
        
    },300);

    return response;
  }, function (error) {
    fail("响应失败")
    // Do something with response error (响应失败的业务逻辑)
    return Promise.reject(error);
});




export {axios,baseURL}