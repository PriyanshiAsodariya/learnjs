function handlesubmit() {
    // console.log("ok");

    let maths = parseFloat(document.getElementById("marks").value);
    let science = parseFloat(document.getElementById("marks1").value);
    let chemstry = parseFloat(document.getElementById("marks2").value);

    let mathsE = true;
    let sciE = true;
    let chemE = true;



    if (maths) {
        if (maths >= 1) {
            document.getElementById('mErr').innerHTML = ''
            mathsE = false;
        } else {
            document.getElementById('mErr').innerHTML = 'please enter valid marks'
        }
    } else {
        document.getElementById('mErr').innerHTML = 'enter marks'
    }

    if (science) {
        if (science >= 1) {
            document.getElementById('m1Err').innerHTML = ''
            sciE = false;
        } else {
            document.getElementById('m1Err').innerHTML = 'please enter valid marks'
        }
    } else {
        document.getElementById('m1Err').innerHTML = 'enter marks'
    }

    if (chemstry) {
        if (chemstry >= 1) {
            document.getElementById('m2Err').innerHTML = ''
            chemE = false;
        } else {
            document.getElementById('m2Err').innerHTML = 'please enter valid marks'
        }
    } else {
        document.getElementById('m2Err').innerHTML = 'enter marks'
    }

    if (mathsE || sciE || chemE) {
        return false
    } else {
        let total;
        total = maths + science + chemstry;
        console.log("total marks is:", total);

        let per;
        per = total / 3;
        console.log("per is:", per);
        let grade;
        if (per > 80) {
            console.log("grade A");
            grade = 'A';
        } else if (per > 70) {
            console.log("grade B");
            grade = 'B';
        } else if (per > 50) {
            console.log("grade C");
            grade = 'C';
        } else {
            console.log("grade D");
            grade = 'D';
        }

        document.getElementById('ans').innerHTML = grade;
        return false;
    }
    return false;
}