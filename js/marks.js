function handlesubmit(){
    // console.log("ok");

    let m = parseFloat(document.getElementById("marks").value);
    let m1 = parseFloat(document.getElementById("marks1").value);
    let m2 = parseFloat(document.getElementById("marks2").value);
    
    let total;

    total = m + m1 + m2 ;

    console.log("total marks is:",total);

    let per;

    per = total/3;

    console.log("per is:",per);

    if(per>80){
        console.log("grade A");
    }else if(per>70){
        console.log("grade B");
    }else if(per>50){
        console.log("grade C");
    }else{
        console.log("grade D");
    }
    
     
}