//udf function
function greeting(){
    console.log("good morning");
}

greeting();

function calcAge(birthyear){
    let age;
    age = 2023 - birthyear;
    return age;
}

let age = calcAge(1992);
console.log(age);

let age1 = calcAge(2003);
console.log(age1);

//arrow fuction


const greeting1 = () =>{
    console.log("hello");
}

greeting1();

const calcAge1 = (birthyear) => {
    let age;
    age = 2023 - birthyear;
    return age;
}

 let res = calcAge1(2003);
console.log(res);

//2nd programme//

const costing = (place) => {     //4
    if(place === 'goa'){
        return 35000;          //5
    }else if(place === 'manali'){   
        return 85000;
    }
}

const pacakages = (place) => {   //2
    cost = costing(place);     //3  //6
    let msg;
    msg = place + ' you costing ' + cost + '.';   
    return msg;     //7
}

 let res2 = pacakages('goa');    //1   //8
console.log(res2);

let res3 = pacakages('manali');  //8
console.log(res3);