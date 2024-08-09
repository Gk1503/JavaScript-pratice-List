const Salary = [];

function ArrayMap() {
    let x = document.getElementById('Am').value;
    Salary.push(x);
    document.getElementById('h1').innerHTML = "Old Salary" +
        Salary;
    let double = Salary.map((NewSalaries) => NewSalaries * 2);
    document.getElementById('h2').innerHTML = "New Salary" +
        double;
}