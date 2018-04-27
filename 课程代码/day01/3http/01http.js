var http = require('http');
/**
 *
 * @param request 请求
 * @param response 响应
 */
function server(request,response){
    console.log(request.method);//请求的方法
    console.log(request.url);//请求里的url地址
    console.log(request.header);//获取请求头

    response.statusCode = 404;//设置状态码
    //设置响应的类型，编码为utf-8
    response.setHeader('Content-type:text/html;charset=utf-8');
    response.setHeader('name','study node.js');//设置响应头
    response.write(new Date().toString());//写入响应体
    response.end();
}
//每当有请求来的时候调用server函数对客户端进行响应
var server = http.createServer();

server.listen(8081,'localhost');