function handlesubmit(){

    event.preventDefault();
    // console.log("ok");
    
    let x = Math.floor(Math.random()*10);
    
    // console.log(x);

    document.getElementById("box1").innerHTML=x;

    
   let y = Math.floor(Math.random()*10);
    
      
    //  Math.random()*10;

    // console.log(y);

    document.getElementById("box2").innerHTML=y;

    
      
}