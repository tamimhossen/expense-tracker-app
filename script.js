let incomeAddbtn = document.getElementById("income-add-btn");
let incomeSource = document.getElementById("Income-source");
let incomeList = document.getElementById("Income-list");
let incomeAmount = document.getElementById("Income-amount");

let expenseAddbtn = document.getElementById("Expense-add-btn");
let expenseSource = document.getElementById("Expense-Source");
let expenseList = document.getElementById("Expense-list");
let expenseAmount = document.getElementById("Expense-amount");


let totalIcomeAmount = document.getElementById("total-income-amount");
let totalExpenseAmount = document.getElementById("total-expense-amount");
let editIcon = document.createElement("img");
editIcon.src = "/images/edit.jpg";
let totalIncomeArray = [];

incomeAddbtn.addEventListener("click", function(){
    if(incomeSource.value.length > 0 && incomeAmount.value.length>0) {
        let incomeSourceIndividual = document.createElement("li");
        incomeSourceIndividual.setAttribute("id", "incomeSourceIndividual");
        let incomeSourceIndividualamount = document.createElement("span");
        incomeList.appendChild(incomeSourceIndividual);
        incomeSourceIndividual.innerText = incomeSource.value;
        incomeSourceIndividual.appendChild(incomeSourceIndividualamount);
        incomeSourceIndividualamount.innerText = incomeAmount.value;
        incomeSourceIndividualamount.appendChild(editIcon);
        incomeSource.value = '';
        incomeAmount.value = '';
        totalIcomeAmount.innerText = 4000;
        saveIncomeData();

        for (let i = 0; i < incomeSourceIndividual.length; i++) {
            console.log(i);
            console.log('for')
        }

    } else {
        alert("please add value")
    }
  });

  expenseAddbtn.addEventListener("click", function(){
    if(expenseSource.value.length > 0 && expenseAmount.value.length>0) {
        let expenseSourceIndividual = document.createElement("li");
        expenseSourceIndividual.setAttribute("id", "expenseSourceIndividual");
        let expenseSourceIndividualamount = document.createElement("span");
        expenseList.appendChild(expenseSourceIndividual);
        expenseSourceIndividual.innerText = expenseSource.value;
        expenseSourceIndividual.appendChild(expenseSourceIndividualamount);
        expenseSourceIndividualamount.innerText = expenseAmount.value;
        expenseSourceIndividualamount.appendChild(editIcon);
        expenseSource.value = '';
        expenseAmount.value = '';
        saveExpenseData();

    } else {
        alert("please add value")
    }
  });

  function saveIncomeData() {
    localStorage.setItem("incomeData", incomeList.innerHTML);
  }

  function saveExpenseData() {
    localStorage.setItem("expenseData", expenseList.innerHTML);
  }

  function showData() {
    incomeList.innerHTML = localStorage.getItem("incomeData");
    expenseList.innerHTML = localStorage.getItem("expenseData");
  }

  document.getElementById("reset").addEventListener("click", function() {
    localStorage.removeItem("incomeData");
    localStorage.removeItem("expenseData");
    location.reload();
    alert("Reset Successful!")
  })

  showData();