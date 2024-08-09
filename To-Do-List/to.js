function ToDoList() {
    let Name = document.getElementById('recipient-name').value;
    let Task = document.getElementById('recipient-Task').value;
    let select = document.getElementById('priority').value;
    let Date = document.getElementById('date').value;
    let Do = JSON.parse(localStorage.getItem("Item"));
    if (Do == null) {
        Do = [];
    }
    Do.push({
        Name: Name,
        Task: Task,
        select: select,
        Date: Date
    });
    localStorage.setItem("Item", JSON.stringify(Do));
    console.log(localStorage.getItem("Item"));

    let ttb = document.getElementById('tb');
    Do.forEach(par => {


        let cre = document.createElement('tr');


        let t1 = document.createElement('td');
        let t2 = document.createElement('td');
        let t3 = document.createElement('td');
        let t4 = document.createElement('td');

        t1.innerHTML = par.Name;
        t2.innerHTML = par.Task;
        t3.innerHTML = par.select;
        t4.innerHTML = par.Date;

        cre.appendChild(t1);
        cre.appendChild(t2);
        cre.appendChild(t3);
        cre.appendChild(t4);
        ttb.appendChild(cre);
    });
}