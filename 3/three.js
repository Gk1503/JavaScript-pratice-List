const dat = [];

function srt() {
    let x = document.getElementById('so').value;
    dat.push(x);


    let sor = dat.sort(
        function(a, b) {
            return a - b;
        }
    )
    document.getElementById('h1').innerHTML = "Accesding:-" + JSON.stringify(sor);

    let sor1 = dat.sort(
        function(a, b) {
            return b - a;
        }
    )
    document.getElementById('h2').innerHTML = "Dccesding:-" + JSON.stringify(sor1);
}