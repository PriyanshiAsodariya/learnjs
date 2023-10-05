//(local storage)

//set any data
// localStorage.setItem('firstname' , 'priyanshi');
// localStorage.setItem('age' , '20');       //data store in localstorage

// //get any data
// console.log(localStorage.getItem('age')); ///log in 20 ans

// //remove any data
// localStorage.removeItem('firstname')

// //clear all data
// localStorage.clear();

// //key find
// console.log(localStorage.key(0));       // firstname
//----------------------------------------------------

//(session storage)    // data store  and new tab or new crome open than data are remove     automatically

//set any data
// sessionStorage.setItem('firstname' , 'priyanshi')
// sessionStorage.setItem('age' , '20')

// //get any data
// console.log( sessionStorage.getItem('firstname'));      //priyanshi

// //remove any data
// sessionStorage.removeItem('age')           //20 remove


// //clear any data
// sessionStorage.clear()

// //key find
// console.log(sessionStorage.key(1)); 

//--------------------------------------------

// let arr = [];

const handlesubmit = () =>{
    // event.preventDefault();

    let data = JSON.parse(localStorage.getItem('name'));
    console.log(data);


    let name = document.getElementById('name').value
    console.log(name);

    if(data){
        data.push(name);
        // console.log(data);

        localStorage.setItem('name',JSON.stringify(data))
    }else{
        localStorage.setItem('name',JSON.stringify([name]))
    }

    // display();
    
}

const display  = () =>{
    let uldata = document.getElementById('ans')

    let data = JSON.parse(localStorage.getItem('name'))
    console.log(data);

    uldata.innerHTML = ''

    // if(data){
        data.map((l)=>{
            let lidata = document.createElement('li');
            let litext = document.createTextNode(l)
            lidata.appendChild(litext)
            uldata.appendChild(lidata)
        })
    // }
    

}
display();