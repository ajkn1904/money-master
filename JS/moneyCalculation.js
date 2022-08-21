const incomeField = document.getElementById("income-field");

const foodField = document.getElementById("food");

const rentField = document.getElementById("rent");

const clothesField = document.getElementById("clothes");




document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const incomeValue = incomeField.value;
    const foodValue = foodField.value;
    const rentValue = rentField.value;
    const clothesValue = clothesField.value;


    foodField.value ='';
    rentField.value = '';
    clothesField.value = '';
     
    const totalExpense = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);   

    const previousTotalString = document.getElementById('total-expense');    
    const previousTotal = parseFloat(previousTotalString.innerText);


    previousTotalString.innerText = totalExpense;


    const previousBalanceString = document.getElementById('balance');
    const previousBalance = parseFloat(previousBalanceString.innerText);

    const totalBalance = parseFloat(incomeValue) - parseFloat(totalExpense);


    previousBalanceString.innerText = totalBalance;

});




document.getElementById('save-btn').addEventListener('click', function(){
   
    const saveAmountField = document.getElementById('save-amount');
    const saveAmount = saveAmountField.innerText;
    

    const saveField = document.getElementById('save-field');
    const savePercentage = parseFloat(saveField.value);
    saveField.value = '';

    const remaingBalanceAmountField = document.getElementById('remaining-balance');
    const remaingBalanceAmount = remaingBalanceAmountField.innerText;


    const previousBalanceString = document.getElementById('balance');
    const previousBalance = parseFloat(previousBalanceString.innerText);


    const incomeValue = parseFloat(incomeField.value);
    incomeField.value = '';


    const savingAmountValue = (incomeValue*(savePercentage/100));
    saveAmountField.innerText = savingAmountValue;

    const remaingBalance = previousBalance - parseFloat(savingAmountValue);

    remaingBalanceAmountField.innerText = remaingBalance;
});


