$(function(){
    var server_ip = "localhost";
    var element = document.createElement("iframe");
    element.setAttribute("style", "overflow: hidden;position: fixed;width:400px;height:400px;border:none;bottom:0;right:0;");
    element.setAttribute("src", "http://" + server_ip + "/js/index.html");
    document.body.appendChild(element);
});

