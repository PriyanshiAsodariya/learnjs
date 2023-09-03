function handlesubmit(){
    // console.log("ok");

    let salary = parseInt(document.getElementById("employee1").value);
    let salary1 = parseInt(document.getElementById("employee2").value);

    let bonus;

    bonus = salary * 0.05;
    console.log("bonus is:",bonus);

    let bonus1;

    bonus1 = salary1 * 0.1;
    console.log("bonus is:",bonus1);

}