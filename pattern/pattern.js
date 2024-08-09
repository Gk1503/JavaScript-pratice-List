function Pattern() {
    let x = parseInt(document.getElementById('Patt').value);
    let res = " ";
    for (let i = 1; i <= x; i++) {
        let n = " ";
        for (let j = 1; j <= i; j++) {
            //console.log("*");
            n += "*";
        }
        console.log(n);
        res += n + "<br/>";

    }
    document.getElementById('pa').innerHTML = res;
}