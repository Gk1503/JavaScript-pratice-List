function oe() {
    let x = document.getElementById('oe').value;
    if (x == "") {
        alert("Please Enter A Number");
    } else {


        if (x % 2 == 0) {
            document.getElementById('h1').innerHTML = "The Number is Even";
        } else {
            document.getElementById('h1').innerHTML = "The Number is Odd";
        }
    }
}