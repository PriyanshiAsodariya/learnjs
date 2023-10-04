let array = [];
let upadte = null


const handlesubmit = () =>{
    event.preventDefault();
    console.log("xxxxxx");

    let name = document.getElementById('name').value;
    console.log(name);

    // console.log(array);

    if(upadte != null || upadte === 0){
        // console.log("update opertion");
        array[upadte] = name;
        upadte = null;

    }else{
        array.push(name)
        // console.log("add opertaion");  
    }
    
    document.getElementById('name').value = '';
    
    display();
}

const handleclick = (i)=>{
    
   array.splice(i,1);

   display();
}
const handleedit = (i) => {
    // console.log(i);
    upadte = i;

    document.getElementById('name').value = array[i];

    // display();
    
}

const display =()=>{
    
    // let print = '<ul>'

    // array.map((name,i)=> {

    //     print = print + `<li>${name} <button onclick="handleedit(${i})">E</button> <button onclick="handleclick(${i})">x</button> </li>`
    
    // })
    // print = print + '</ul>'

    // document.getElementById('ans').innerHTML = print

    let ulelem = document.getElementById('ans');

    let lielem = document.createElement('li');
    let litext = document.createTextNode('10');

    lielem.appendChild(litext)
    ulelem.appendChild(lielem);

    
}








