let dateE = true;
let tableE = true;
let foodE = true;
let personE = true;

let update = null;

const handlesubmit = () => {
    let id = Math.floor(Math.random() * 1000)
    console.log(id);
    // event.preventDefault();
    // console.log("okkkk");

    let date = document.getElementById('date').value;
    console.log(date);

    if (date) {
        document.getElementById('dateErr').innerHTML = '';
        dateE = false;
    } else {
        document.getElementById('dateErr').innerHTML = "Enter Date";
    }

    let table = document.getElementById('table').value;
    console.log(table);


    if (table === '0') {
        document.getElementById('tableErr').innerHTML = 'Select Table';
    } else {
        document.getElementById('tableErr').innerHTML = '';
        tableE = false;
    }



    let person = document.getElementById('person').value;
    console.log(person);

    if (person) {
        document.getElementById('personErr').innerHTML = "";
        personE = false;
    } else {
        document.getElementById('personErr').innerHTML = "enter no of person";
    }

    let food = document.getElementById('food').value;
    console.log(food);


    if (food === '0') {
        document.getElementById('foodErr').innerHTML = 'select food'
    } else {
        document.getElementById('foodErr').innerHTML = '';
        foodE = false;
    }
    // let foodname;
    //         let price;

    //         if (food === '250') {
    //             foodname = 'punjabi'
    //         } else if (food === '150') {
    //             foodname = 'chinese'
    //         } else if (food === '200') {
    //             foodname = 'south indian'
    //         }
    //         console.log(foodname);

          

    //         if (food === '250') {
    //             price = 250;
    //         } else if (food === '150') {
    //             price = 150;
    //         } else if (food === '200') {
            //     price = 200;
            // }
            // console.log(price);

            // let amount;
            // amount = price * person;
            // console.log(amount);



    let getdata = JSON.parse(localStorage.getItem('hotel_data'));       //2
    console.log(getdata);

    if (dateE || personE || foodE || tableE) {
        return false;
    } else {

        if (update) {
            let obj = {
                id: update,
                'date': date,
                'table': table,
                'food': food,
                'person': person,
                'amount': amount
            }
            let foodname;
            let price;

            if (food === 'panjabi') {
                foodname = 'panjabi';
                price = 250;
            } else if (food === 'chinees') {
                foodname = 'chinees';
                price = 150;
            } else if (food === 'south indian') {
                foodname = 'southindian';
                price = 200;
            }
            console.log(foodname);

            let amount;
            amount = price * person;
            console.log(amount);

            console.log("update", obj);
            let index = getdata.findIndex((v) => v.id == update);

            getdata[index] = obj;
            localStorage.setItem('hotel_data', JSON.stringify(getdata));

            window.location.reload();


        } else {
            let obj = {
                id,
                'date': date,
                'table': table,
                'food': food,
                'person': person,
                'amount': amount
            }
            console.log("add", obj);

            if (getdata === null) {                                           //3
                localStorage.setItem('hotel_data', JSON.stringify([obj]));        ///1
            } else {
                getdata.push(obj);
                localStorage.setItem('hotel_data', JSON.stringify(getdata));
            }
        }
        return true;

    }



}

const deletedata = (id) => {
    // console.log("deletee");
    console.log(id);

    let getdata = JSON.parse(localStorage.getItem('hotel_data'));
    // console.log(getdata);

    let fData = getdata.filter((v) => v.id != id)
    console.log(fData);

    localStorage.setItem('hotel_data', JSON.stringify(fData));

    window.location.reload();

}


const display = () => {


    let getdata = JSON.parse(localStorage.getItem('hotel_data'));
    console.log(getdata);

    // parent.innerHTML = '';
    let parent = document.getElementById('box');


    getdata.map((v) => {

        let tr = document.createElement('tr')


        let td1 = document.createElement('td')
        let td1text = document.createTextNode(v.date);
        td1.appendChild(td1text);
        tr.appendChild(td1);


        let td2 = document.createElement('td')
        let td2text = document.createTextNode(v.table);
        td2.appendChild(td2text);
        tr.appendChild(td2);


        let td3 = document.createElement('td')
        let td3text = document.createTextNode(v.food);
        td3.appendChild(td3text);
        tr.appendChild(td3);


        let td4 = document.createElement('td')
        let td4text = document.createTextNode(v.person);
        td4.appendChild(td4text);
        tr.appendChild(td4);


        let td5 = document.createElement('td')
        let td5text = document.createTextNode(v.amount);
        td5.appendChild(td5text);
        tr.appendChild(td5);


        let deletbtn = document.createElement('button')
        deletbtn.setAttribute('id', 'button')
        deletbtn.setAttribute("onclick", "deletedata(" + v.id + ")");
        let btntext = document.createTextNode('x')
        deletbtn.appendChild(btntext)
        tr.appendChild(deletbtn)

        let editbtn = document.createElement('button')
        editbtn.setAttribute('id', 'button')
        editbtn.setAttribute("onclick", "editform(" + v.id + ")")
        let edittext = document.createTextNode('E')
        editbtn.appendChild(edittext)
        tr.appendChild(editbtn)


        parent.appendChild(tr)
    })

    let finalcounter = getdata.reduce((acc, v) => acc + v.amount, 0)
    console.log(finalcounter);

    let trbill = document.createElement('tr');
    trbill.setAttribute('id', 'bill')
    let thbill = document.createElement('th');
    // thbill.colSpan ='5'
    thbill.setAttribute('colspan', '5')
    let thtext = document.createTextNode('final counter');
    thbill.appendChild(thtext);
    trbill.appendChild(thbill);



    let thbill1 = document.createElement('th')

    let thtext1 = document.createTextNode(finalcounter)
    thbill1.appendChild(thtext1)
    trbill.appendChild(thbill1)

    parent.appendChild(trbill);


}
display();




const editform = (id) => {
    console.log(id);

    let getdata = JSON.parse(localStorage.getItem('hotel_data'));
    // console.log(getdata);

    let index = getdata.findIndex((v) => v.id == id);
    console.log(getdata[index]);

    document.getElementById('date').value = getdata[index].date;
    document.getElementById('table').value = getdata[index].table;
    document.getElementById('food').value = getdata[index].food;
    document.getElementById('person').value = getdata[index].person;

    update = getdata[index].id;

}
