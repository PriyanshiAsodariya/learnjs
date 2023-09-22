const tc_s = 1, tc_c = 500;
const fl_s = 2, fl_c = 1500;
const rct_s = 4, rct_c = 2500;
const rctc_s = 6, rctc_c = 12000;
const br_s = 12, br_c = 35000;

let treat_s = 0;
let treat_c = 0;
let treat_name = 0;

const handlechange = () => {

    // console.log("okkkk");

    let select = document.getElementById("select").value;
    console.log(select);



    if (select === 'tc') {
        treat_name = 'Teeth Cleaning'
        treat_s = tc_s
        treat_c = tc_c
    } else if (select === 'fl') {
        treat_name = 'Filling'
        treat_s = fl_s
        treat_c = fl_c
    } else if (select === 'rct') {
        treat_name = 'Root Canal Treatment'
        treat_s = rct_s
        treat_c = rct_c
    } else if (select === 'rct_cover') {
        treat_name = 'Rct + Cover'
        treat_s = rctc_s
        treat_c = rctc_c
    } else if (select === 'br') {
        treat_name = 'Braces'
        treat_s = br_s
        treat_c = br_c
    }

    document.getElementById('data1').innerHTML = treat_name
    document.getElementById('data2').innerHTML = treat_s
    document.getElementById('data3').innerHTML = treat_c


    document.getElementById('apt').style.display = 'block'

}

const handleclick = () => {
    console.log("okkk");

    let aptdate = document.getElementById('aptdate').value;
    console.log(aptdate);

    let d = new Date(aptdate)
    console.log(d);

    let print = '<table border="2px"id="table"><tr><th>Treatment</th><th>Seating</th><th>Costing</th></tr>'

    for (let i = 0; i < treat_s; i++) {
        print = print + '<tr>'

        if (i === 0) {
            print = print + '<td rowspan = ' + treat_s + ' >'
            print = print + treat_name
            print = print + '</td>'
        }

        print = print + '<td>'
        print = print + (d.toLocaleDateString())
        print = print + '</td>'

        print = print + '<td>'
        print = print + treat_c / treat_s
        print = print + '</td>'

        print = print + '</tr>'

        console.log(d.getDate());
        d.setDate(d.getDate() + 7);
    }

    print = print + '</table>'
    console.log(print);

    document.getElementById('seating_plan').innerHTML = print;
}