let x = Math.floor(Math.random()*10);
let y = Math.floor(Math.random()*10);
console.log(x,y);

document.getElementById("box1").innerHTML=x;
document.getElementById("box2").innerHTML=y;
console.log(x,y);

let  correctans = x + y;
console.log(correctans); 



function handlesubmit(){

    event.preventDefault();

    let userans=parseInt(document.getElementById("ans").value);

    if(correctans == userans ){
        alert("ans is correct");
    }else{
        alert("incorrect ans.correct ans is:"+correctans);
    }
    
    
      
}