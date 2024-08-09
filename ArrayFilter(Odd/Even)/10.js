const Main = [];
const Odd = [];
const even = [];

function sorting() {

    let x = document.getElementById('Af').value;
    Main.push(x);
    if (x % 2 == 0) {
        even.push(x);
    } else {
        Odd.push(x);
    }
    document.getElementById('h1').innerHTML = "Even Numbers: " + even;
    document.getElementById('h2').innerHTML = "Odd Numbers: " + Odd;

}