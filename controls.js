var preview = document.getElementById("preview"),
    colorInp = document.getElementById("colorInp"),
    brange = document.getElementById("brange"),
    bnumber = document.getElementById("bnumber"),
    brandom = document.getElementById("brandom"),
    
    range1 = document.getElementById("range1"),
    range2 = document.getElementById("range2"),
    range3 = document.getElementById("range3"),
    range4 = document.getElementById("range4"),
    
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

function changeType(type){
    range1.type = type;
    range2.type = type;
    range3.type = type;
    range4.type = type;
}

function createAvatar(){
    var npreview = document.createElement("div"),
        nimg1 = document.createElement("img"),
        nimg2 = document.createElement("img"),
        nimg3 = document.createElement("img"),
        nimg4 = document.createElement("img"),
        newdesc = document.createElement("div");
    
    npreview.className = "nprev col-xl-12 col-lg-8 col-md-6 col-sm-4";
    npreview.id = "nprevId";
    npreview.style.width = "100px";
    npreview.style.height = "100px";
    npreview.style.backgroundColor = preview.style.backgroundColor;
    
    nimg1.className = "nitems";
    nimg1.src = hair.src;
    nimg1.style.cssText = hair.style.cssText;

    nimg2.className = "nitems";
    nimg2.src = eyes.src;
    nimg2.style.cssText = eyes.style.cssText;

    nimg3.className = "nitems";
    nimg3.src = nose.src;
    nimg3.style.cssText = nose.style.cssText;

    nimg4.className = "nitems";
    nimg4.src = mouth.src;
    nimg4.style.cssText = mouth.style.cssText;

    npreview.appendChild(nimg1);
    npreview.appendChild(nimg2);
    npreview.appendChild(nimg3);
    npreview.appendChild(nimg4);
    document.getElementById("display").appendChild(npreview);
}

function createRandom(){
    var r1 = Math.floor((Math.random() * 3) + 1),
        r2 = Math.floor((Math.random() * 3) + 1),
        r3 = Math.floor((Math.random() * 3) + 1),
        r4 = Math.floor((Math.random() * 3) + 1);
        rh = Math.floor((Math.random() * 70) + 1),
        re = Math.floor((Math.random() * 40) + 1),
        rn = Math.floor((Math.random() * 30) + 1),
        rm = Math.floor((Math.random() * 35) + 1),
        rred = Math.floor((Math.random() * 255) + 1),
        rgreen = Math.floor((Math.random() * 255) + 1),
        rblue = Math.floor((Math.random() * 255) + 1);
    hair.src = "img/hair"+r1+".png";
    eyes.src = "img/eyes"+r2+".png";
    nose.src = "img/nose"+r3+".png";
    mouth.src = "img/mouth"+r4+".png";
    hair.style.width = rh+"%";
    eyes.style.width = re+"%";
    nose.style.width = rn+"%";
    mouth.style.width = rm+"%";
    preview.style.backgroundColor = "rgb("+rred+", "+rgreen+", "+rblue+")";
    
    range1.value = rh;
    range2.value = re;
    range3.value = rn;
    range4.value = rm;
}

colorInp.addEventListener("change", function(){
    preview.style.backgroundColor = colorInp.value;
});

brange.addEventListener("click", function(){
    changeType("range");
});

bnumber.addEventListener("click", function(){
    changeType("number");
});

range1.addEventListener("change", function(){
    hair.style.width = range1.value+"%";
});

range2.addEventListener("change", function(){
    eyes.style.width = range2.value+"%";
});

range3.addEventListener("change", function(){
    nose.style.width = range3.value+"%";
});

range4.addEventListener("change", function(){
    mouth.style.width = range4.value+"%";
});

document.getElementById("bplus").addEventListener("click", function(){
    createAvatar();
});

brandom.addEventListener("click", function(){
    createRandom();
});

document.getElementById("autorandom").addEventListener("click", function(){
    mtimer = setInterval(function(){
        createRandom();
        createAvatar();
    }, 500);
});

document.getElementById("stoprandom").addEventListener("click", function(){
    clearInterval(mtimer);
});

document.getElementById("display").addEventListener("click", function(){
    var nprevId = document.getElementById("nprevId");
    nprevId.remove();
});