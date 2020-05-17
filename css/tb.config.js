
// webpack 打包操作   
// vue-cli 脚手架的配置文件 
// 以后修改这个配置文件  一定要重启服务 才能有用 
// 反向代理  一定务必将 axios  的基路径注释掉   baseURL
// 修改配置文件务必要  重启 服务 
// 反向代理  (1. 当做基路径   2. 解决跨域问题 协议 端口 主机   )

//  代理  找一个靠谱的中间人  发展下线   
//  代理   接收上级代理的命令  传递下一级代理  

//   反向代理  (服务器的跨域  客户端  )
//   客户端发送请求     http://localhost:8080
//   服务器端接收请求   http://47.104.209.44:3333/
//   设置一个代理   proxy    发送的请求还是 走客户端的 接口模式    (骗过客户端)
//   请求地址有 代理的名称  ( /yun )  把本地地址代理成 服务器的地址 
//   通过服务器的接口地址 请求 服务器  这样服务器也不会有跨域  



module.exports = {
    lintOnSave:false ,   // 处理ESLint 的 error 提示 
    devServer:{
        host:"localhost",  // 0.0.0.0
        port:8080,
        open:true,  // 自动打开浏览器  
        inline:true,  
        proxy:{   // 反向代理    
            "/yun":{
                target:"http://47.104.209.44:3333/",  // 服务器地址  
                pathRewrite:{
                    "^/yun":""  // 需要将 /yun 重写为 / 
                }
            },
            "/vue":{
                target:"http://localhost:3000"   //  所有的接口 path 都有  vue  
            },
            "/public":{
                target:"http://localhost:3000" ,  //  所有的接口 path 都有  vue  
                pathRewrite:{
                    "^/public":""  // 需要将 /yun 重写为 / 
                }
            },
            "/maizuo":{
                target:"https://m.maizuo.com",  // 服务器地址  
                pathRewrite:{
                    "^/maizuo":""  // 需要将 /yun 重写为 / 
                }
            },
        }
    },
    // publicPath:"",  // 项目上线打包 
    css:{
        loaderOptions:{
            css:{},
            postcss:{   // css 代码转化
                plugins:[  // 插件
                    require("postcss-px2rem-exclude")({
                        // 3. 淘宝适配  1rem = 10vw 
                        remUnit:37.5,   // 自动除以 100 
                        // remUnit:100     // 网易适配 
                    })
                ]
            }
        }
    }
}