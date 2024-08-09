function INR() {
    let x = document.getElementById('inr').value;
    let INR = x * 81.72;
    document.getElementById('usd').value = INR;
}

function USD() {
    let y = document.getElementById('usd').value;
    let USD = y / 81.72;
    document.getElementById('inr').value = USD;
}