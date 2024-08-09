let x = parseInt(document.getElementById('v1').value);
let y = parseInt(document.getElementById('v2').value);

function add() {
    let x = parseInt(document.getElementById('v1').value);
    let y = parseInt(document.getElementById('v2').value);

    let result = x + y;

    document.getElementById('result').innerHTML = result;
    alert(result);
}

function sub() {
    let x = parseInt(document.getElementById('v1').value);
    let y = parseInt(document.getElementById('v2').value);

    let result = x - y;

    document.getElementById('result').innerHTML = result;
}

function Div() {
    let x = parseInt(document.getElementById('v1').value);
    let y = parseInt(document.getElementById('v2').value);

    let result = x / y;

    document.getElementById('result').innerHTML = result;
}

function mul() {
    let x = parseInt(document.getElementById('v1').value);
    let y = parseInt(document.getElementById('v2').value);

    let result = x * y;

    document.getElementById('result').innerHTML = result;
}