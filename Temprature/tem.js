function Cel() {
    let x = parseInt(document.getElementById('Cel').value);

    let Converter = (9 / 5) * x + 32;
    document.getElementById('h1').innerHTML = "The Fahrenhei is :" + Converter;

}