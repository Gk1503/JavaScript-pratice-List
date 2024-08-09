function pallindrome() {
    let x = document.getElementById('pallin').value;
    let y = x.split("").reverse("").join("");
    console.log(x);
    console.log(y);

    if (x == y) {
        document.getElementById('pa').innerHTML = "The Number is pallindrome";
    } else {
        document.getElementById('pa').innerHTML = "The Number is not pallindrome";
    }
}