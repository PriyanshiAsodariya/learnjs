//(local storage)

//set any data
localStorage.setItem('firstname' , 'priyanshi');
localStorage.setItem('age' , '20');       //data store in localstorage

//get any data
console.log(localStorage.getItem('age')); ///log in 20 ans

//remove any data
localStorage.removeItem('firstname')

//clear all data
// localStorage.clear();

//key find
console.log(localStorage.key(0));       // firstname
//----------------------------------------------------

//(session storage)    // data store  and new tab or new crome open than data are remove     automatically

//set any data
sessionStorage.setItem('firstname' , 'priyanshi')
sessionStorage.setItem('age' , '20')

//get any data
console.log( sessionStorage.getItem('firstname'));      //priyanshi

//remove any data
sessionStorage.removeItem('age')           //20 remove


//clear any data
// sessionStorage.clear()

//key find
console.log(sessionStorage.key(1)); 