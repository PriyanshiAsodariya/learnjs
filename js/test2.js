let array = [];


const handlesubmit = () =>{
    event.preventDefault();
    console.log("xxxxxx");

    let name = document.getElementById('name').value;
    console.log(name);

    array.push(name)
    console.log(array);

    let print = '<ul>'

    array.map((name)=> {

        print = print + '<li>'
        print = print +   name + '<input type="button" onclick ="handleclick()" value="x"></input>'
        print = print + '</li>'

    })
    print = print + '</ul>'

    //-----------------------------------------------

        // array.push(name)
        // console.log(array);

    //     let print = '<ul>'
    // for(let i=0; i<array.length; i++){
    
    //     print = print + '<li>'
    //     print = print +   array[i] + '' + '<input type="button" value="x"></input>'
    //     print = print + '</li>'

    // }
    //     print = print + '</ul>'

    document.getElementById('ans').innerHTML = print
    
}

const handleclick = ()=>{
    array.pop();
    console.log(array);

    // document.getElementById('ans').innerHTML = array
   
}








