function handlesubmit(){
    // console.log("ok");

    let cast = document.getElementById("cast").value;
    console.log("your cast:",cast);

    let cgpa = parseFloat(document.getElementById("cgpa").value);
    console.log("cgpa is:",cgpa);
    let fees = parseInt(document.getElementById("fees").value);
    console.log("fees is :",fees);
    let cgpaE = true;
    let feesE = true;

    // if(cast === '0'){
    //     document.getElementById('castErr').innerHTML = 'select cast'
    // }else{
    //     document.getElementById('castErr').innerHTML = '';
    // }

    if(cgpa){
        document.getElementById('cgpaErr').innerHTML = ''
        cgpa = false
    }else{
        document.getElementById('cgpaErr').innerHTML = 'enter cgpa'
    }

    if(fees){
        if(fees>=1){
            document.getElementById('feesErr').innerHTML = ''
            feesE = false
        }else{
            document.getElementById('feesErr').innerHTML = 'enter valud fees'
        } 
    }else{
        document.getElementById('feesErr').innerHTML = 'enter fees'
    }

    if(cgpaE || feesE){
        return false;
    }else{

    }


    let grade,scholarship,payablefees;
    if(cgpa>=9 && cgpa<=10){
        grade = 'A';
    }else if(cgpa>=8.5 && cgpa<9){
        grade = 'B';
    }
    console.log( "grade is:",grade);
    // document.getElementById('grade').innerHTML = 'grade';

    if(grade == 'A' || grade == 'B'){
        if(cast == 'o'){
            console.log("no scholarship");
        }else if(cast == 'ob'){
            scholarship = fees * 0.25;
           
        }else if(cast == 'sc'){
            scholarship = fees * 0.5;
           
        }else if(cast == 'st'){
            scholarship = fees * 1;
            
        }
        console.log("scholarship is:",scholarship);
        document.getElementById('ans').innerHTML = scholarship;

        payablefees = fees - scholarship;
        console.log("payablefees:",payablefees);
        
    }

    return false;
}