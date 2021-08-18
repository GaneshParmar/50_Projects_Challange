var load=0;

var inter=setInterval(blurring_image, 20);

function blurring_image() {
    load++;
    if(load>99){
        clearInterval(inter);
    };
    loading_text.innerHTML=load+"%";
    loading_text.style.opacity=scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
}


//StackOverFlow 
const scale=(num,in_min,in_max,out_min,out_max)=>{
    return ((num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min)
}