/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

var h = 1,
    e = 1,
    n = 1,
    m = 1;

hair.addEventListener("click", function(){
    if(h == 3){
        h = 1;
        hair.src = "img/hair"+h+".png";
    } else{
        h += 1;
        hair.src = "img/hair"+h+".png";
    }
});

eyes.addEventListener("click", function(){
    if(e == 3){
        e = 1;
        eyes.src = "img/eyes"+e+".png";
    } else{
        e += 1;
        eyes.src = "img/eyes"+e+".png";
    }
});

nose.addEventListener("click", function(){
    if(n == 3){
        n = 1;
        nose.src = "img/nose"+n+".png";
    } else{
        n += 1;
        nose.src = "img/nose"+n+".png";
    }
});

mouth.addEventListener("click", function(){
    if(m == 3){
        m = 1;
        mouth.src = "img/mouth"+m+".png";
    } else{
        m += 1;
        mouth.src = "img/mouth"+m+".png";
    }
});