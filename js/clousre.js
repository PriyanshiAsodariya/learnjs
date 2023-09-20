//global variable
let age = 25;

//outer function
const peronalInfo = (name) =>{
    console.log(name);           //outer function parameter
    let education = 'bcom'

    //inerr function
    return information = (salary) =>{
        console.log(name);           //outer function parameter
        console.log(education);      //outer function variable
        console.log(age);           //global variable

        console.log(salary);        //inner function parameter
    }

}

//function call
let res = peronalInfo('priyanshi');
console.log(res);  // function return

res(20000);     


const incrementcounter = () => {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    }
}

let ans = incrementcounter();

console.log(ans);

ans();      //1
ans();      //2

let ans1 = incrementcounter();

ans1();      //1
ans1();      //2







