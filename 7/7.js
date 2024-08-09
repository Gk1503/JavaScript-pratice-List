function prime() {
    let x = document.getElementById('pri').value;
    let flag = true;
    for (let i = 2; i < x; i++) {
        flag = false;
    }
    if (flag == true) {
        document.getElementById('h1').innerHTML = "Prime.";

    } else {
        document.getElementById('h1').innerHTML = 'Not Prime.'
    }
}