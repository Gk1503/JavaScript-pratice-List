const a1 = [];

function sumOfArray() {
    let x = parseInt(document.getElementById('V').value);
    a1.push(x);
    let sum = 0;
    for (let i = 0; i < a1.length; i++) {
        sum += a1[i];
    }
    console.log(sum);
    let avg = sum / a1.length;
    console.log(avg);
    document.getElementById('h1').innerHTML = "Main Array :" + JSON.stringify(a1);
    document.getElementById('h2').innerHTML = "Sum Of Array :" + sum;
    document.getElementById('h3').innerHTML = "Avg Of Array :" + avg;
}