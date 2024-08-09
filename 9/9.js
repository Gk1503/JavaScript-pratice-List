// const x = document.getElementById('first').value;
// const y = document.getElementById('Second').value;

function add() {
    let x = parseInt(document.getElementById('first').value);
    let y = parseInt(document.getElementById('Second').value);
    let z = x + y;

    document.getElementById('h1').innerHTML = z;
    alert(z);
}