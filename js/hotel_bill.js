// let dateE = true;
// let tableE = true;
// let foodE = true;
// let personE = true;

const handlesubmit = () => {
    // event.preventDefault();
    // console.log("okkkk");

    let date = document.getElementById('date').value;
    console.log(date);

    let table = document.getElementById('table').value;
     console.log(table);

    let person = document.getElementById('person').value;
     console.log(person);

    let food = document.getElementById('food').value;
    console.log(food);

    
    let foodname;

        if (food === '250') {
            foodname = 'punjabi'
        } else if (food === '150') {
            foodname = 'chinese'
        } else if (food === '200') {
            foodname = 'south indian'
        }
        console.log(foodname);

        let price;

        if (food === '250') {
            price = 250;
        } else if (food === '150') {
            price = 150;
        } else if (food === '200') {
            price = 200;
        }
        console.log(price);

        
        let amount;
        amount = food * person;
        console.log(amount);



    let obj = {
        'date': date,
        'table' : table,
        'food' : foodname,
        'person' : person,
        'amount' : amount
    }
    console.log(obj);

     
    let getdata = JSON.parse(localStorage.getItem('hotel_data'));       //2
    console.log(getdata);

    if(getdata === null){                                           //3
        localStorage.setItem('hotel_data',JSON.stringify([obj]));        ///1
    }else{
        getdata.push(obj);
        localStorage.setItem('hotel_data',JSON.stringify(getdata));
    }

    display();
}

const display = () => {
    
    let getdata = JSON.parse(localStorage.getItem('hotel_data'));       
    console.log(getdata);

    parent.innerHTML = ''

    getdata.map((v)=>{
        let parent = document.getElementById('box');
       
        let tr = document.createElement('tr')
    

        let td1 = document.createElement('td')
        let td1text = document.createTextNode(v.date);
        td1.appendChild(td1text);
        tr.appendChild(td1);
        parent.appendChild(tr)


        let td2 = document.createElement('td')
        let td2text = document.createTextNode(v.table);
        td2.appendChild(td2text);
        tr.appendChild(td2);
        parent.appendChild(tr)

        let td3 = document.createElement('td')
        let td3text = document.createTextNode(v.food);
        td3.appendChild(td3text);
        tr.appendChild(td3);
        parent.appendChild(tr)

        let td4 = document.createElement('td')
        let td4text = document.createTextNode(v.person);
        td4.appendChild(td4text);
        tr.appendChild(td4);
        parent.appendChild(tr)

        let td5 = document.createElement('td')
        let td5text = document.createTextNode(v.amount);
        td5.appendChild(td5text);
        tr.appendChild(td5);
        parent.appendChild(tr)
    })

    let final_bill;

    final_bill = getdata.reduce((acc,v)=>acc + v.amount )
    let tr2 = document.createElement('tr')

    let td6 = document.createElement('td')
    td6.setAttribute('colspan','3')
    let td6txt = createTextNode('')
    td6.appendChild(td6txt)
    tr2.appendChild(td6)
    parent.appendChild(tr2)
    }
    display();


    // if (date) {
    //     document.getElementById('dateErr').innerHTML = '';
    //     let dateE = false;
    // } else {
    //     document.getElementById('dateErr').innerHTML = "Enter Date";
    // }

  


    
   
    // if (table === '0') {
    //     document.getElementById('tableErr').innerHTML = 'Select Table';
    // } else {
    //     document.getElementById('tableErr').innerHTML = '';
    //     let tableE = false;
    // }


    
    // if (food === '0') {
    //     document.getElementById('foodErr').innerHTML = 'select food'
    // } else {
    //     document.getElementById('foodErr').innerHTML = '';
    //     let foodE = false;
    // }

    

   
    // if (person) {
    //     document.getElementById('personErr').innerHTML = "";
    //     let personE = false;
    // } else {
    //     document.getElementById('personErr').innerHTML = "enter no of person";
    // }

    

   

    // let object = (data.table)
    // console.log(object);

    
        

        // document.getElementById('box').style.display = 'block';

        

