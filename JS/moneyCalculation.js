const incomeField = document.getElementById("income-field");
const incomeValue = incomeField.value;

const foodField = document.getElementById("food");
const foodValue = foodField.value;

const rentField = document.getElementById("rent");
const rentValue = rentField.value;

const clothesField = document.getElementById("clothes");
const clothesValue = clothesField.value;


document.getElementById('calculate-btn').addEventListener('click', function(){

    const totalExpense = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);   

    const previousTotalString = document.getElementById('total-expense');    
    const previousTotal = parseFloat(previousTotalString.innerText);


    previousTotalString.innerText = totalExpense;


    const previousBalanceString = document.getElementById('balance');
    const previousBalance = parseFloat(previousBalanceString.innerText);

    const totalBalance = parseFloat(incomeValue) - parseFloat(totalExpense);


    previousBalanceString.innerText = totalBalance;

});



