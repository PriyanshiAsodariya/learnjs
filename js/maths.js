let x = Math.floor(Math.random()*10);
let y = Math.floor(Math.random()*10);
console.log(x,y);

document.getElementById("box1").innerHTML=x;
console.log(x); 
document.getElementById("box2").innerHTML=y;
console.log(y);

let  correctans = x + y;
console.log(correctans); 

function handlesubmit(){
   
    let userans=parseInt(document.getElementById("ans").value);
    if(userans){
        if(correctans == userans){
            alert("ans is correct");
        }else{
            alert("incorrect ans.correct ans is:"+correctans);
        }
        
        document.getElementById('ansErr').innerHTML = ''
        
    }else{
        document.getElementById('ansErr').innerHTML ='please enter ans';
    }

    return false;
      
}