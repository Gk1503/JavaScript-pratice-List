function BT() {

    let amount = document.getElementById('T').value;
    let text = document.getElementById('des').value;
    let transaction = JSON.parse(localStorage.getItem("item"))
    if (transaction == null) {
        transaction = [];
    }
    let type = "";
    if (amount >= 0) {

        type = "income";
    } else {
        type = "Expense";
    }

    transaction.push({
        amount: amount,
        text: text,
        type: type

    });

    localStorage.setItem("item", JSON.stringify(transaction));

    let sum = 0;
    transaction.forEach((x) => {
        sum += parseInt(x.amount);
    });
    document.getElementById('BallShow').value = sum;

    console.log(sum);
    let inc = 0;
    let exp = 0;
    transaction.forEach((x) => {
            if (x.type === "income") {
                inc += parseInt(x.amount);

            } else {
                exp = +parseInt(x.amount);
            }
        }

    )
    console.log(inc);
    console.log(exp);
    document.getElementById('Tein').value = exp;
    document.getElementById('Toinp').value = inc;
    let his = document.createElement("li");
    let un = document.createTextNode(text + " " + amount);
    his.appendChild(un);
    document.getElementById("hist").appendChild(`${un}<br>`);
    his.className = 'listitem';

}