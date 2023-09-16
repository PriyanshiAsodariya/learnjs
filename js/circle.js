function handlesubmit(){
    // console.log("ok");


    let r = parseFloat(document.getElementById("radius").value);
    let radiusE = true;
    if(r){
        document.getElementById('error').innerHTML = ''
        radiusE = false;
    }else{
        document.getElementById('error').innerHTML = 'enter radius'
    }

    if(radiusE){
        return false;
    }else{
        let area;

        area = 3.14 * r * r;
        
        console.log(area);

        document.getElementById('ans').innerHTML = area;
        return false;
    }

    let area;

    area = 3.14 * r * r;
    
    console.log(area);

    document.getElementById('ans').innerHTML = area;
    return false;

    
}