function handlesubmit(){
    // console.log("ok");

    let r = parseFloat(document.getElementById("radius").value);
    if(r){
        document.getElementById('error').innerHTML = ''
    }else{
        document.getElementById('error').innerHTML = 'enter radius'
    }
    
    let area;

    area = 3.14 * r * r;
    
    console.log(area);

    document.getElementById('ans').innerHTML = area;
    return false;

    
}