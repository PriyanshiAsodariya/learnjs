let array = []


const handlesubmit = () =>{
    event.preventDefault();
    console.log("xxxxxx");

    let name = document.getElementById('name').value;
    console.log(name);


    array.push(name)
    console.log(array);

    document.getElementById('ans').innerHTML = array;
    // document.getElementById('ans2').innerHTML = array;
    // document.getElementById('ans3').innerHTML = array;


}
const handleclick = ()=>{
    array.pop()
    console.log(array);

    document.getElementById('ans').innerHTML = array;
}





