const interest = document.querySelector("#interest");
const amount = document.querySelector("#amount");
const years = document.querySelector("#years");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");

button.addEventListener("click", function () {

    const interestValue = interest.value;
    const amountValue = amount.value;
    const yearsValue = years.value;

    //Calculate
    const principal = parseFloat(amountValue);
    const calculatedInterest = parseFloat(interestValue) / 100 / 12;
    const calculatedPayments = parseFloat(yearsValue) * 12;

    //Calculating the monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    //calculating the total interest
    const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

    //calculating the total payment
    const totalPayment = (monthly * calculatedPayments).toFixed(2);

    result.innerHTML = ` 
        <p>Monthly Payment: <span class="result">${addCommas(monthlyPayment)}</span></p>
        <p>Total Interest: <span class="result">${addCommas(totalInterest)}</span></p>
        <p>Total Payment: <span class="result">${addCommas(totalPayment)}</span></p>
    `;
});

function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//clear button
clear.addEventListener("click", function () {
    interest.value = "";
    amount.value = "";
    years.value = "";
    result.innerHTML = "";
});


