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
            nameE = false;
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
            emailE = false;
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
            mobileE = false;
        }else{
            document.getElementById('mobileErr').innerHTML = 'plaese enter valid mo.number';
        }
        
    }

    let country = document.getElementById('country').value;
    // console.log(country);

    if(country === '0'){
        document.getElementById('countryErr').innerHTML = 'please select any country';
    }else{
        document.getElementById('countryErr').innerHTML = '';
        countryE = false;
    }

    let gender = document.contactForm.gender.value;
    // console.log(gender);

    if(gender === ''){
        document.getElementById('genderErr').innerHTML = 'please select gender';
    }else{
        document.getElementById('genderErr').innerHTML = '';
        genderE = false;
    }

    let hobby = document.contactForm.hobbies;
    // console.log(hobby[0].value,hobby[0].checked);

    let flag;
    for(let i=0; i<hobby.length; i++){
        console.log(hobby[i].value,hobby[i].checked);
        
        
        if(hobby[i].checked){
            flag = true;
            break;
        }
    }

    if(flag){
        document.getElementById('hobbyErr').innerHTML = '';
        hobbyE = false;
    }else{
        document.getElementById('hobbyErr').innerHTML = 'please select minimum one hobby';
    }

    let nameE = true;
    let emailE = true;
    let mobileE = true;
    let countryE = true;
    let genderE = true;
    let hobbyE = true;
    
    if(nameE || emailE || mobileE || countryE || genderE || hobbyE){
        return false;
    }else{
        return true;
    }

  






    return false;
}