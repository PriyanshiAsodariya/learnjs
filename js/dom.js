// //(getelementbyId)

// let header = document.getElementById('header-title');

// header.textContent = 'priyanshi'    // header can change

// header.innerText = 'computer course'

// header.innerHTML = '<h1>hello</h1>'

// header.style.borderBottom = '5px solid black'     // css can apply 

//-----------------------------------

//(getelemetnbyClassname)

// let items = document.getElementsByClassName('list-item');
// // console.log(items[0]);      // index through li

// items[1].textContent = 'react native'   // value change by class
// items[2].style.fontWeight = 'bold';      // value can bold
// items[3].style.color = 'red';

// for(let i=0; i<items.length; i++){
//     items[i].style.color = 'green'     // all li can change color
// }

//------------------------------------

//(getelementby tagname)

//---------------------------
// const handleclick = ()=>{
//     console.log('clicked');
// }


// let divelem = document.getElementById('ans')

// let h1elem = document.createElement('h1');
// let h1text = document.createTextNode('helloo')

// h1elem.appendChild(h1text)
// divelem.appendChild(h1elem)

// let aelem = document.createElement('a')
// aelem.setAttribute('href' , '#')
// aelem.setAttribute('onclick', 'handleclick()')

// let atext = document.createTextNode('home')

// aelem.appendChild(atext)
// divelem.appendChild(aelem)

//-----------------------------
const handleclick = (id) =>{
console.log("okkk");

    let refdiv = document.getElementById('div-'+id)
    refdiv.remove();
}

const handlesubmit = ()=>{
    event.preventDefault();
    console.log("okkk");



let div = document.getElementById('ans');

let name = document.getElementById('name').value;
console.log(name);

let id = Math.floor(Math.random()* 1000)
console.log(id);



let divelem = document.createElement('div')
divelem.setAttribute('id', 'div-'+id)
let divtext = document.createTextNode(name)

divelem.appendChild(divtext)
div.appendChild(divelem)


let btnelem = document.createElement('button')
btnelem.setAttribute('onclick', 'handleclick('+ id +')')
let btntext = document.createTextNode('x')

btnelem.appendChild(btntext)
div.appendChild(btnelem)
divelem.appendChild(btnelem)


}


