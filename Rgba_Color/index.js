function getValue(element,x,display,r,g,b,a) {
    var value=element.value;
    var r_value=x.value;
    display.innerHTML=r_value;
    var rgba_value=`rgba(${r.innerHTML},${g.innerHTML},${b.innerHTML},${a.innerHTML})`;
    rgba_print.value=rgba_value;
    document.getElementById("color_shower").style.background=rgba_print.value;
}
function user_colour(red,green,blue,alpha) {
    document.getElementById("color_shower").style.background=rgba_print.value;
    var rgba_test=rgba_value_split(rgba_print.value);
    var [r,g,b,a]=rgba_test;
    red.value=r;
    green.value=g;
    blue.value=b;
    alpha.value=a;
    r_value_display.innerHTML=r;
    g_value_display.innerHTML=g;
    b_value_display.innerHTML=b;
    a_value_display.innerHTML=a;
}

function slider_animation(btn=0) {
    if (btn=="on"){
        slider.style.left="0";
        slider1.style.left="100%";
    }
    else{
         slider.style.left="-100%";
         slider1.style.left="0";
    }
}

var value=[];



function rgba_value_split(x){
    var rgb=[];
    var v=x.replace(/rgba/,""); //This will store the value without rgba text
    // Now lets split the text for eg "rgba(255,6,9,1)" --> "(255,6,9,1)" --->["(","2","5",...."1",")"]
    // var test=v.split("")

    function push_value(v,i,value) {
        value.push(v[i]);
    }
    v=v.split("");
    for (i in v){
        if(v[i]=="(" || v[i]==")"){
            continue;
        }
        else{
            if (v[i]==","){
                console.log(value)
                val=value.join("");
                console.log(val);
                rgb.push(val);
                value.length=0;
                continue;
            }
            if(rgb.length==3){
                rgb.push(v[i]);
            }
            else {
                push_value(v,i,value);
            }
        }
    }
    return rgb;
}

function show_copy() {
    copy_text.style.visibility="visible";
}

function hide_copy() {
    copy_text.style.visibility="hidden";
}

cp_icon=document.querySelector("#copy_icon");

function copy_function(){
    var copied_rgba_value=document.querySelector("#rgba_print").value;

    if (window.innerWidth<=900) {

        alert("Yes")

        // copied_rgba_value.contentEditable = true;
    
        // copied_rgba_value.readOnly = true;
    
        // var range = document.createRange();
    
        // range.selectNodeContents(copied_rgba_value);
    
        // var selection = window.getSelection();
    
        // selection.removeAllRanges();
    
        // selection.addRange(range);
    
        // el.setSelectionRange(0, 999);

        // navigator.clipboard.writeText(copied_rgba_value);
        copied_rgba_value.focus();
        copied_rgba_value.select();
        navigator.clipboard.writeText(copied_rgba_value);
        // copied_rgba_value.select();
        // copied_rgba_value.setSelectionRange(0, 99999); /* For mobile devices */

        // document.execCommand("copy");
    
    }
    // // selecting the text
    // copied_rgba_value.select();
    // copied_rgba_value.setSelectionRange(0, 99999); /* For mobile devices */
    else{
        navigator.clipboard.writeText(copied_rgba_value);
    }
    cp_icon.classList.remove('fa-copy');
    cp_icon.classList.add('fa-check');  
}

function test() {
    cp_icon.classList.remove('fa-tick');
    cp_icon.classList.add('fa-copy');
}


cp_icon.addEventListener('click',
function () {
        copy_function();
        setTimeout(() => {
            test()
        }, 200);    
    // document.querySelector("#copy_icon").classList.remove('fa-tick');
    // document.querySelector("#copy_icon").classList.add('fa-copy');
    
}
)
var status="on";
function shift() {
    if(status=="on"){
        on_off.style.left="10px";
        body.style.background="rgb(26, 23, 23)";
        body.style.color="white";
        header.style.background="gray";
        // color_shower.style.background="rgba(41,34,15,1)";
        status="off";
    }
    else{
        on_off.style.left="-21px";
        body.style.background="white";
        body.style.color="black";
        status="on";
    }
}