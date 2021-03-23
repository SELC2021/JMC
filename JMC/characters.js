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

function addBalance(amount) {
    sessionStorage.setItem("balance", parseInt(sessionStorage.getItem("balance"), 10) + amount);
}

function addSalary(amount) {
    sessionStorage.setItem("salary", parseInt(sessionStorage.getItem("salary"), 10) + amount);
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