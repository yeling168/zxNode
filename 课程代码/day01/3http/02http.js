var http = require('http');
var fs = require('fs');
/**
 *
 * @param request ����
 * @param response ��Ӧ
 */
function server(request,response){
    console.log(request.method);//����ķ���
    console.log(request.url);//�������url��ַ
    console.log(request.header);//��ȡ����ͷ

    response.statusCode = 200;//����״̬��
    //������Ӧ�����ͣ�����Ϊutf-8
    response.setHeader('Content-type:text/html;charset=utf-8');
    response.setHeader('name','study node.js');//������Ӧͷ
    //��ȡ�ļ������ݲ��ҽ�����������д����Ӧ��
    fs.readFile('index.html',function(err,data){
        response.write(data);//д����Ӧ��
        response.end();
    })

}
//ÿ������������ʱ�����server�����Կͻ��˽�����Ӧ
var server = http.createServer();

server.listen(8082,'localhost');