let sb = [];

function Smallbig() {
    let x = document.getElementById('sm').value;

    sb.push(x);

    let sir = sb.sort(

        function(a, b) {
            return a - b;
        }
    )
    let small = sir[0];
    let large = sir[sir.length - 1];
    document.getElementById('h1').innerHTML = small;
    document.getElementById('h').innerHTML = large;
}