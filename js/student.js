let update = null;
displayData = () => {
    try {
        fetch("http://localhost:3004/student")
            .then((respose) => {
                console.log(respose);
                if (respose.ok) {
                    //  console.log(respose.json());
                    return respose.json();
                }

                throw new Error("something went wrong")
            })
            .then((data) => {
                // console.log(data);
                let print = '<table border="1"><tr><th>roll no</th><th>name</th><th>fees</th><th>Action</th></tr>'

                data.map((v) => {

                    print += `<tr>`;
                    print += `<td>${v.roll_no}</td><td>${v.name}</td><td>${v.fees}</td><td><button onclick="handleDelet(${v.id})">Delet</button><button onclick=handleEdit('${JSON.stringify(v)}')>Edit</button</td>`
                    print += `</tr>`;
                })
                print += '</table>';
                // console.log(print);
                document.getElementById("disp").innerHTML = print;
            })
            .catch((error) => console.log(error.message));

    } catch (error) {
        console.log(error);
    }
}
const addStu = () => {
    // console.log("kkjjn");
    let roll_no = parseInt(document.getElementById("roll_no").value);
    let name = document.getElementById("name").value;
    let fees = parseInt(document.getElementById("fees").value);

    let obj = {
        roll_no,
        name,
        fees
    }
    console.log(obj);

    console.log(update);
    if (update) {
        console.log("update work");
        try {
            fetch("http://localhost:3004/student/" + update, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            })
                .then((resonse) => {
                    if (resonse.ok) {
                    }
                    throw new Error("something went wrong")
                })
                .catch((error) => console.log(error.message));
        } catch (error) {

        }
    } else {
        try {
            fetch("http://localhost:3004/student", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            })
                .then((resonse) => {
                    if (resonse.ok) {
                    }
                    throw new Error("something went wrong")
                })
                .catch((error) => console.log(error.message));
        } catch (error) {

        }

    }


}
const handleDelet = (id) => {
    console.log("delet", id);
    try {
        fetch("http://localhost:3004/student/" + id, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();

                }
                throw new Error('Something went wrong');
            })
            .catch((error) => console.log(error.message));

    } catch (error) {

    }
}

const handleEdit = (v) => {
    let data = JSON.parse(v)
    console.log(data);

    document.getElementById("roll_no").value = data.roll_no;
    document.getElementById("name").value = data.name;
    document.getElementById("fees").value = data.fees;

    update = data.id;

}




window.onload = displayData;

let fromRef = document.getElementById("stu-form");
fromRef.addEventListener("submit", addStu)