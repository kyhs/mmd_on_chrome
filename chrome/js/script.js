$(function(){
    // var element1 = document.createElement('div');
    // element1.id = 'slide_box';
    // element1.setAttribute('style', 'overflow: hidden;position: fixed;width:200px;bottom:0;right:0;');
    // document.body.appendChild(element1);

    // var element_fukidashi = document.createElement('div');
    // element_fukidashi.setAttribute('style', 'position: relative;display: inline-block;margin: 1.5em 0;padding: 7px 10px;min-width: 120px;max-width: 100%;color: #555;font-size: 16px;background: #fff8a0;');
    
    // var element_form = document.createElement('form');
    // var element_message = document.createElement('p');
    // element_message.innerText = "何について調べますか？";
    // element_form.appendChild(element_message);
    // var element_textarea = document.createElement('textarea');
    // element_textarea.setAttribute('rows', '3');
    // element_textarea.setAttribute('cols', '20');
    // element_form.appendChild(element_textarea);
    // var element_search = document.createElement('button');
    // element_search.innerText = "検索";
    // element_form.appendChild(element_search);
    // element_fukidashi.appendChild(element_form);


    // element1.appendChild(element_fukidashi);

    // var element_img = document.createElement('img');
    // element_img.setAttribute('src', 'https://3.bp.blogspot.com/-Pa6UIB7KEr0/UNvsoxs5D_I/AAAAAAAAJqs/7Lwo1P2MKTA/s1600/animal_dolphin.png');
    // element_img.setAttribute('alt', 'picture');
    // element_img.setAttribute('width', '200');
    // element1.appendChild(element_img);


    var element = document.createElement("iframe");
    element.setAttribute("style", "overflow: hidden;position: fixed;width:400px;height:400px;border:none;bottom:0;right:0;");
    element.setAttribute("src", "http://192.168.150.104:8080/js/index.html");
    document.body.appendChild(element);
    //$("body").prepend(element)
});

