let c1;

function setCharacter(bal, pay, position, name, surname) {
    c1 = new Character(bal, pay, position, name, surname);
    let balance = bal;
    let salary = pay;
    let job = position;
    let firstname = name;
    let lastname = surname;
    sessionStorage.setItem("balance", balance);
    sessionStorage.setItem("salary", salary);
    sessionStorage.setItem("job", job);
    sessionStorage.setItem("firstname", firstname);
    sessionStorage.setItem("lastname", lastname);
}

function setBalance(amount) {
    sessionStorage.setItem("balance", amount);
}

function setSalary(amount) {
    sessionStorage.setItem("salary", amount);
}

function setJob(title) {
    sessionStorage.setItem("job", title);
}

class Character {
    constructor(balance, salary, job, firstName, lastName) {
        this.balance = balance;
        this.salary = salary;
        this.job = job;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}