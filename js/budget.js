class Budget {
    constructor() {

        this.budgetInput = document.querySelector("#budget_amt");

        this.budget = document.querySelector("#span_total");
        this.expense = document.querySelector("#span_exp");
        this.balance = document.querySelector("#span_bal");

    }

    submitbudget() {
        event.preventDefault();
        // console.log("submitbudget");
        let budget = parseInt(this.budgetInput.value);
        // console.log(budget);

        if (budget < 0 || budget === '' || isNaN(budget)) {
            document.getElementById("budgetErr").innerHTML = 'please enter valid amount';
        } else {
            document.getElementById("budgetErr").innerHTML = '';
            this.budget.innerHTML = budget;

            this.displaydata();
        }

    }



    displaydata() {
        let localBudget = localStorage.getItem("Budget");
        let localexpense = JSON.parse(localStorage.getItem("exp_list"));
        // console.log(localexpense);
        let localbalance = localStorage.getItem("Balance");

        // console.log(localBudget, localexpense, localbalance);


        if (localBudget != 0 && localBudget !== null) {
            let amount;

            if (localexpense) {
                amount = localexpense.reduce((acc, v) => acc + v.expval, 0);
            } else {
                amount = 0;
            }

            console.log(amount);
            this.budget.innerHTML = localBudget;
            this.expense.innerHTML = amount;
            this.balance.innerHTML = localbalance - amount;
        } else {
            let budgetval = parseInt(this.budget.textContent);
            console.log(budgetval);
            localStorage.setItem("Budget", JSON.stringify(budgetval))

            let expensedata = parseInt(this.expense.textContent);
            console.log(expensedata);
            localStorage.setItem("expense", JSON.stringify(expensedata))

            let balancedata = budgetval - expensedata;
            console.log(balancedata);   
            localStorage.setItem("Balance", JSON.stringify(balancedata))

            this.balance.innerHTML = balancedata;
        }
    }
}

class expense extends Budget {
    constructor() {
        super();

        this.expenseName = document.querySelector('#exp_name');
        this.expenseval = document.querySelector("#exp_amt");
        this.update = null;
    }
    submitexpense() {
        // event.preventDefault();


        // console.log("submitexpense");
        let expensename = this.expenseName.value;
        let expenseval = this.expenseval.value;

        let expenseE = true;
        let expensenameE = true;

        if (expensename === '') {
            document.getElementById('expense_nameErr').innerHTML = "Please Enter Expense";
        } else {
            document.getElementById('expense_nameErr').innerHTML = "";
            expenseE = false;

        }

        if (expenseval === '' || expenseval < 0) {
            document.getElementById('expense_valErr').innerHTML = "Please Enter Expense Amount";
        } else {
            document.getElementById('expense_valErr').innerHTML = "";
            expensenameE = false;

            this.expense.innerHTML = expenseval;
        }





        if (!expenseE && !expensenameE) {

            if (this.update) {
                console.log("update task", this.update);

                let getdata = JSON.parse(localStorage.getItem("exp_list"));

                let index = getdata.findIndex((v) => v.id === this.update);
                console.log(index);

                let obj = {
                    id: this.update,
                    expname: expensename,
                    expval: parseInt(expenseval),

                };
                console.log(obj);

                getdata[index] = obj;

                localStorage.setItem("exp_list", JSON.stringify(getdata))
            } else {
                console.log("add task");


                let expenselist = JSON.parse(localStorage.getItem("exp_list"))

                let id = Math.floor(Math.random() * 1000)
                console.log(id);
            

                if (expenselist) {
                    expenselist.push({ id: id, expname: expensename, expval: parseInt(expenseval) });
                    localStorage.setItem("exp_list", JSON.stringify(expenselist))

                } else {
                    localStorage.setItem("exp_list", JSON.stringify([{ id: id, expname: expensename, expval: parseInt(expenseval) }]))

                }
            }
        }

        this.displaydata();
        this.displaylist();
        this.update = null;
        this.expenseName = '';
        this.expenseval = '';   

    }

    handleEdit(data) {
        console.log(data);

        let expdata = JSON.parse(localStorage.getItem("exp_list"));
        console.log(expdata);

        this.expenseName.value = data.expname;
        this.expenseval.value = data.expval;
        this.update = data.id;

    }

    handleDelet(id) {
        console.log(id);

        let getdata = JSON.parse(localStorage.getItem("exp_list"));
        console.log(getdata);

        if (getdata) {
            let data = getdata.filter((v) => v.id != id)
            console.log(data);

            localStorage.setItem("exp_list", JSON.stringify(data));

            // window.location.reload()

            this.displaydata();
            this.displaylist();
        }
    }

    displaylist() {
        let expenselist = JSON.parse(localStorage.getItem("exp_list"));
        
        if (expenselist) {
            let ulref = document.getElementById('ul-exp');
            ulref.innerHTML = ''
             

            expenselist.map((v) => {
                let lielem = document.createElement("li")
                

                let spanNameelem = document.createElement("span")
                spanNameelem.setAttribute("id", "spanname")
                let spanNameTxt = document.createTextNode(v.expname)

                spanNameelem.appendChild(spanNameTxt)
                lielem.appendChild(spanNameelem)

                let spanvalelem = document.createElement("span")
                spanvalelem.setAttribute("id", "spanval")
                let spanvalTxt = document.createTextNode(v.expval)

                spanvalelem.appendChild(spanvalTxt)
                lielem.appendChild(spanvalelem)

                let btnE = document.createElement("button")
                btnE.setAttribute("id", "button")
                btnE.addEventListener("click", function () {
                    e.handleEdit(v);
                })

                let btnEtxt = document.createTextNode("E")

                btnE.appendChild(btnEtxt);
                lielem.appendChild(btnE);

                let btnD = document.createElement("button")
                btnD.setAttribute("id", "buttonD")
                btnD.addEventListener("click", function () {
                    e.handleDelet(v.id);
                })
                let btnDtxt = document.createTextNode("X")

                btnD.appendChild(btnDtxt);
                lielem.appendChild(btnD);

                ulref.appendChild(lielem)
            })
        }

    }
}
// let b = new Budget();

let e = new expense();

e.displaydata();
e.displaylist();


let budgetform = document.getElementById("budget-form");
budgetform.addEventListener("submit", function () {
    e.submitbudget()
});


let expenseform = document.getElementById("expense-form");
expenseform.addEventListener("submit", function () {
    e.submitexpense()
});
