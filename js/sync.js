//sync process
// const firstfun = () => {
//     console.log("first process");
// }

// const secondfun = () => {
//     console.log("second process");
// }

// const thirdfun = () => {
//     console.log("third process");
// }

// firstfun();
// secondfun();
// thirdfun();

//-----------------------------------------

//sync - problem

// const firstfun = () => {
//     console.log("first process");
// }

// const secondfun = () => {

//     let d = new Date();

//     while(Date.now() - d < 5000){

//     }
//     console.log("second process");
// }

// const thirdfun = () => {
//     console.log("third process");
// }

// firstfun();
// secondfun();
// thirdfun();

//----------------------------------------

//callback function

// const print = (data) =>{
//     console.log(data);

// }
// const add  = (a,b,callback) =>{
//     let c = a + b;

//    callback(c)
// }

// add(10,20,print);

//===============================

//asynchronous by callback 

// console.log("programme start");    //1

// const display = (data) =>{
//     console.log(data);

// }

// const getdata = () =>{      // waiting 3
//     setTimeout(function(){
//         console.log("hello");

//     },3000)
// }
// getdata(display);       //2

// console.log("i am in the programme");     //2.1

//------------------------------------------

//promis by asynchronous

// console.log("start progarmme:");

// const mypromise = new Promise ((resolve , reject)=>{
//     setTimeout(function(){
//         resolve("hello")
//     },3000)
// })

// mypromise
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error))

// console.log("i am in the programme: ");

//--------------------------------------
