function handlebackground(){
    // console.log("ok");

    let country = document.getElementById("country").value;
    // console.log("country");


    if(country === 'in'){
        document.getElementById("body").style.backgroundColor='green';
        // console.log("INDIA");
    }else if(country === 'uk'){
        document.getElementById("body").style.backgroundColor='yellow';
        // console.log("UK");
    }else if(country === 'us'){
        document.getElementById("body").style.backgroundColor='blue';
        // console.log("us");
    }else {
        document.getElementById("body").style.backgroundColor='brown';
        // console.log(0);
    }





}