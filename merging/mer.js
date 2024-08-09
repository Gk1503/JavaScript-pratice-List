const a1 = [];
const a2 = [];

function Merging() {
    let x = document.getElementById('V1').value;
    let y = document.getElementById('V2').value;
    a1.push(x);
    a2.push(y);

    let z = [...new Set(a1), ...new Set(a2)];
    let w = z.sort(function(a, b) {
        return a - b
    });
    console.log(z);
}