var http = require('http');
/**
 *
 * @param request ����
 * @param response ��Ӧ
 */
function server(request,response){
    console.log(request.method);//����ķ���
    console.log(request.url);//�������url��ַ
    console.log(request.header);//��ȡ����ͷ

    response.statusCode = 404;//����״̬��
    //������Ӧ�����ͣ�����Ϊutf-8
    response.setHeader('Content-type:text/html;charset=utf-8');
    response.setHeader('name','study node.js');//������Ӧͷ
    response.write(new Date().toString());//д����Ӧ��
    response.end();
}
//ÿ������������ʱ�����server�����Կͻ��˽�����Ӧ
var server = http.createServer();

server.listen(8081,'localhost');