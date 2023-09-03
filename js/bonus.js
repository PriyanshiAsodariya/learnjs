function handlesubmit(){
    // console.log("ok");

    let salary = parseInt(document.getElementById("employee1").value);
    let salary1 = parseInt(document.getElementById("employee2").value);

    console.log("total salary:",salary);
    console.log("total salary:",salary1);
    let bonus;

    // bonus = salary * 0.05;
    // console.log("bonus is:",bonus);

    // let bonus1;

    // bonus1 = salary1 * 0.1;
    // console.log("bonus is:",bonus1);

    if(salary>5000){
        bonus = salary * 0.1;
        console.log(bonus);
    }else if(salary<5000){
        bonus = salary * 0.05;
        console.log(bonus);
    }

}