//(getelementbyId)

let header = document.getElementById('header-title');

header.textContent = 'priyanshi'    // header can change

header.innerText = 'computer course'

header.innerHTML = '<h1>hello</h1>'

header.style.borderBottom = '5px solid black'     // css can apply 

//-----------------------------------

//(getelemetnbyClassname)

let items = document.getElementsByClassName('list-item');
// console.log(items[0]);      // index through li

items[1].textContent = 'react native'   // value change by class
items[2].style.fontWeight = 'bold';      // value can bold
items[3].style.color = 'red';

for(let i=0; i<items.length; i++){
    items[i].style.color = 'green'     // all li can change color
}

//------------------------------------

//(getelementby tagname)

//---------------------------

