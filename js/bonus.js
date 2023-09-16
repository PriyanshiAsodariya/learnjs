function handlesubmit(){
    // console.log("ok");

    let salary = parseInt(document.getElementById("employee1").value);
    let salaryE = true;
    console.log("total salary:",salary);

    if(salary){
        if(salary>=1){
            document.getElementById('error').innerHTML = ''
            salaryE = false;
        }else{
            document.getElementById('error').innerHTML = 'please enter valid salary'
        }
    }else{
        document.getElementById('error').innerHTML = 'please enter salary'
    }

    if(salaryE){
        return false;
    }else{
        let bonus;
        if(salary>5000){
            bonus = salary * 0.1;
            console.log(bonus);
        }else if(salary<5000){
            bonus = salary * 0.05;
            console.log(bonus);
        }

        document.getElementById('ans').innerHTML = bonus;
        return false;
    }



    return false;
}