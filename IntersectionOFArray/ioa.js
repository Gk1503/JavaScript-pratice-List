const a1 = [];

function MyArray() {
    let x = document.getElementById('tx').value;
    a1.push(x);
    let y = [...new Set(a1)];
    document.getElementById('h1').innerHTML = JSON.stringify(y);
}