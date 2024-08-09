function Tip() {
    let x = parseInt(document.getElementById('Am').value);
    let y = document.getElementById('Tip').value;
    let tip = x * y / 100;
    let gst = x * 18 / 100;
    let Total = x + tip + gst;

    // console.log(x);
    // console.log(tip);
    // console.log(gst);
    // console.log(Total);

    document.getElementById('d1').innerHTML = x;
    document.getElementById('d2').innerHTML = tip;
    document.getElementById('d3').innerHTML = gst;
    document.getElementById('d4').innerHTML = Total;

}