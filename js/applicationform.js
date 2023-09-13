function validateForm(){
    // console.log("okkk");

    let name = document.contactForm.name.value;
    // console.log("name");

    if(name === ''){
        document.getElementById('nameErr').innerHTML = 'plaese enter name';
    }else{
        let regname = /^[a-zA-z]{2,30}$/
        if(regname .test(name)){
            document.getElementById('nameErr').innerHTML = '';
        }else{
            document.getElementById('nameErr').innerHTML = 'plaese enter valid name';
        }
    }

    let email = document.contactForm.email.value;
    // console.log("email");

    if(email === ''){
        document.getElementById('emailErr').innerHTML = 'plaese enter email';
    }else{
        let regemail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(regemail.test(email)){
            document.getElementById('emailErr').innerHTML = '';
        }else{
            document.getElementById('emailErr').innerHTML = 'plaese enter valid email';
        }
    }

    let mobile = document.contactForm.mobile.value;
    // console.log(mobile);
  
    if(mobile === ''){
        document.getElementById('mobileErr').innerHTML = 'plaese enter mo.number';
    }else{
        let regmobile = /^\d{10}$/
        if(regmobile.test(mobile)){
            document.getElementById('mobileErr').innerHTML = '';
        }else{
            document.getElementById('mobileErr').innerHTML = 'plaese enter valid email';
        }
        
    }

    let country = document.getElementById('country').value;
    // console.log(country);

    if(country === '0'){
        document.getElementById('countryErr').innerHTML = 'please select any country';
    }else{
        document.getElementById('countryErr').innerHTML = '';
    }



    return false;
}