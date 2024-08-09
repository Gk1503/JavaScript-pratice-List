function fibo() {
    let x = document.getElementById('fib').value;
    let a = 0;
    let b = 1;
    let result;

    for (let i = 2; i <= x; i++) {
        result = a + b;
        a = b;
        b = result;

    }
    document.getElementById('h').innerHTML = result;
}