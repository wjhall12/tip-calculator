let totalBill;
let plusTip;
let allTogether;
let tipPercentage;
let allTotal;

document.getElementById('mySubmit').onclick = function() {
    totalBill = document.getElementById('billAmount').value;
    totalBill = Number(totalBill);

    plusTip = document.getElementById('tipAmount').value;
    plusTip = Number(plusTip);

    allTogether = (totalBill * plusTip) + totalBill;
    allTogether = Number(allTogether);

    tipPercentage = document.getElementById('guest').value;
    tipPercentage = Number(tipPercentage);

    allTotal = allTogether / tipPercentage;
    allTotal = Number(allTotal);

    document.getElementById('myH4').textContent = `${allTotal}`;
}