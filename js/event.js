// mouse event:

function handleonclick(){
    document.getElementById("birds").value;
    alert("first image");
}
function handleondblclick(){
    document.getElementById("books").value;
    alert("second image");
}
function handleonmouseover(){
    document.getElementById("dog").value;
    alert("third image");
}
function handleonmousedown(){
    // console.log("okk");
    document.getElementById("button").value;
    alert("clicked button");
}
function handleonmouseup(){
    console.log("pppp");
    document.getElementById("button").value;
    alert("mouse up");
}
window.onload = function() {
    // console.log("kkkkk");
    alert ("window loaded");
}
window.onunload = function(){
    // console.log("okkk");
}
function handlefocus(){
    let x = document.getElementById("name").style.backgroundColor = 'blue';
}
function handleblur(){
    let x = document.getElementById('name').style.backgroundColor = 'white';
}

// window event:

let mywindow;

function windowopen(){
    // window.open();
    // window.open("http://www.google.com/");
    // window.open("http://www.google.com/","_parent");

    mywindow = window.open("http://www.google.com/","_blank" ,"width=500px,height=500px,left=200px, right=200px,top=200px,");
}

function closewindow(){
    mywindow.close();
}