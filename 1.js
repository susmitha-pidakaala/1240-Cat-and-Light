let onbulb = document.getElementById("onbulb");
let imagecat = document.getElementById("imagecat");
let switchon = document.getElementById("switchon");
let onbutton = document.getElementById("onbutton");
let offbutton = document.getElementById("offbutton");
function onbutton1(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchon.textContent ="Switch On";
    switchon1.style.color="red";
    
    document.getElementById("onbutton").style.backgroundColor="green";
    document.getElementById("onbutton").style.backgroundColor="gray";


}
function offbutton1(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchon.textContent = "Switch Off";
    switchon1.style.color="red";
    document.getElementById("onbutton").style.backgroundColor="gray";
    document.getElementById("onbutton").style.backgroundColor="green";

    

}