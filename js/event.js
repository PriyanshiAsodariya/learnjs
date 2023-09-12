// mouse event:

function image1(){
    document.getElementById("birds").value;
    alert("event activated");
}
function image2(){
    document.getElementById("books").value;
    alert("hello world");
}
function image3(){
    document.getElementById("dog").value;
    alert("okkkkk");
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