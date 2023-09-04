function handlesubmit(){
    // console.log("ok");

    let cast = document.getElementById("cast").value;
    console.log("your cast:",cast);

    let cgpa = parseFloat(document.getElementById("cgpa").value);

    console.log("cgpa is:",cgpa);

    let fees = parseInt(document.getElementById("fees").value);

    console.log("fees is :",fees);

    let grade,scholarship,payablefees;
    if(cgpa>=9 && cgpa<=10){
        grade = 'A';
    }else if(cgpa>=8.5 && cgpa<9){
        grade = 'B';
    }
    console.log( "grade is:",grade);

    if(grade == 'A' || grade == 'B'){
        if(cast == 'o'){
            console.log("no scholarship");
        }else if(cast == 'ob'){
            scholarship = fees * 0.25;
           
        }else if(cast == 'sc'){
            scholarship = fees * 0.5;
           
        }else if(cast == 'st'){
            scholarshi = fees * 1;
            
        }
        console.log("scholarship is:",scholarship);

        payablefees = fees - scholarship;
        console.log("payablefees:",payablefees);
        
    }

}