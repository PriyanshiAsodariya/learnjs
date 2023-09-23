function handlesubmit() {
    // console.log("okkk");
    event.preventDefault();


    let name = document.getElementById('name').value
    console.log(name);

    let number = document.getElementById('number').value;
    console.log(number);

    birthdate = (document.getElementById('birthdate').value);
    console.log(birthdate);

    let d = new Date(birthdate)
    console.log(d);

    let birth_year = (d.getFullYear());
    console.log(birth_year);

    let age = 2023 - birth_year
    console.log(age);

    let premium;
    if (age >= 18 && age <= 25) {
        premium = 1000;
    } else if (age >= 26 && age <= 35) {
        premium = 1500;
    } else if (age >= 36 && age < 45) {
        premium = 2000;
    } else if (age >= 45) {
        premium = 2500;
    }
    console.log(premium);


    let occ_prem, smoke_prem;

    let occupation = document.getElementById('occupation').value;
    console.log(occupation);

    let smoke = document.getElementById('smoke').value;
    console.log(smoke);

    if (occupation === 'self') {
        occ_prem = premium * 0.10;
        console.log("occupation premium =", occ_prem);
    } else if (occupation === 'sal') {
        // occ_prem = premium;
        occ_prem = 0;
        console.log("occupation premium =", occ_prem);
    }


    if (smoke === 'yes') {
        smoke_prem = premium * 0.20;
        console.log("smoking premium =", smoke_prem);
    } else if (smoke === 'no') {
        // smoke_prem = premium;
        smoke_prem = 0;
        console.log("smoking premium =", smoke_prem);
    }

    let total_premium = occ_prem + smoke_prem;
    console.log("total premium =", total_premium);

    premium = total_premium + premium;
    console.log(premium);


    let select = document.getElementById('select').value;
    console.log(select);

    let ins_amt = document.getElementById('ins_amt').value;
    console.log(ins_amt);

    if (ins_amt === '') {
        document.getElementById('error').innerHTML = 'please enter insurance amount'
    } else {
        if (select === '1' && ins_amt <= 5000000) {
            document.getElementById('error').innerHTML = ''
        } else if (select === '2' && ins_amt <= 10000000) {
            document.getElementById('error').innerHTML = ''
        } else if (select === '3' && ins_amt <= 15000000) {
            document.getElementById('error').innerHTML = ''
        } else if (select === '4' && ins_amt <= 20000000) {
            document.getElementById('error').innerHTML = ''
        } else {
            document.getElementById('error').innerHTML = 'you are not eligible for this amt'
        }
    }

        // document.getElementById('table').style.display = 'block'

        let print = ' <table><tr><th>name</th><th>age</th><th>mobile no</th><th>insurance amount</th><th>premium</th </tr>'



        print = print + '<tr>'

        print = print + '<td>'
        print = print + name
        print = print + '</td>'

        print = print + '<td>'
        print = print + age
        print = print + '</td>'

        // print = print + '<td>'
        // print = print + 
        // print = print + '</td>'

        print = print + '</tr>'

        print = print + '</table>'

        document.getElementById('table').innerHTML = print;


        return false;

    }







