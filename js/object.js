let person1 = ['priyanshi' , 20 , 'asodariya']

let person = {
    fname : 'priyanshi',
    lname : 'asodariya',
    age : 20,
    hobbies : ['driving','travelling','reading'],
    living : {
        'city' : 'surat',
        'country' : 'india'
    },
    salary : function(){
        return 20000;
    },
    fullname : function(){
        return this.fname + " " + this.lname;
    }

}

// person.email = 'asodariyapriyanshi@gmail.com';     //add in object
// delete person.lastname;                           //delet proprties

// console.log(person);                  // full object
// console.log(person.fname);           // priyanshi

// console.log(person.emial);             // undefind
console.log('email' in person);           //check in email is in object or  not return boolean value

// for(let key in person){
//     console.log(key + ' ' + person[key]);     // full object with value return help of looping
// }

// console.log(person.hobbies[2]);              // reading

// console.log(person.living);             // living properties in full object
// console.log(person.living.city);          // surat

// console.log(person.salary());             //20000

// console.log(person.fullname());           //priyanshi asodariya
// //------------------------

// let a = new Object();

// a.email = 'asodariyapriyanshi@gmail.com'
// a.fname = 'priyanshi'
// a.lname = 'asodariya'


// console.log(a);                    //full object
// console.log(a.email);                //email

//-------------------------------------------------------
//=========================================================

//(classroom task)

// const person3 = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person3.map((v,i)=>{
//     console.log(v.name , v.age);
// })

//---------------------------------

// const person = [    
//     {
//         name: "Amit",
//         age: 25,
//         course: [
//            "c",
//            "html"
//        ]
//     }
    
// ]  

// person.map((v,i)=>{
//     console.log(v.name , v.age);
//     v.course.map((v1)=>{
//         console.log(v1);
//     })
// })

//-----------------------------

const myObj = {
    name:"jd",
    age:20,
    cars:{
        car1:"ford",
        car2:"breza",
        car3:"BMW"
    }
}

for(let k in myObj){
    if(k === 'cars'){
        for(let j in myObj[k]){
            console.log(myObj[k][j]);
        }
    }else{
        console.log(myObj[k]);
    }
   
}
//------------------------------


// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((v,i)=>{
    // for(let k in v){
    //     if(k === 'course'){
    //         for(let j in v[k]){
    //             console.log(v[k][j]);
    //         }
    //     }else{
            // console.log(v[k]);
        // }
//     }
// })
//-------------------------

let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat : 10
        }
    }
}

// for(let k in data){
//     console.log(k);
//     if(k === 'branches'){
//         for(let p in data[k]){
//             // console.log(data[k][p]);
//             for(let m in data[k][p]){
//                 console.log(data[k][p][m]);
//             }
//         }
//     }else{
//         for(let j in data[k]){
//             console.log(data[k][j]);
    //     }
    // }
// }



