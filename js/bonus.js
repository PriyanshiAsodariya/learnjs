function handlesubmit(){
    // console.log("ok");

    let salary = parseInt(document.getElementById("employee1").value);
    
    console.log("total salary:",salary);
    console.log("total salary:",salary1);
    let bonus;

    
    if(salary>5000){
        bonus = salary * 0.1;
        console.log(bonus);
    }else if(salary<5000){
        bonus = salary * 0.05;
        console.log(bonus);
    }

}