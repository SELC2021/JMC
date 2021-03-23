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

class Character {
    constructor(balance, salary, job, firstName, lastName) {
        this.balance = balance;
        this.salary = salary;
        this.job = job;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setBalance(bal) {
        this.balance = bal;
    }

    getBalance() {
        return this.balance;
    }
    
    setSalary(pay) {
        this.salary = pay;
    }

    getSalary() {
        return this.salary;
    }
    
    setJob(position) {
        this.job = position;
    }

    getJob() {
        return this.job;
    }
    
    setFirstName(name) {
        return this.firstName;
    }

    getFirstName() {
        return this.firstName;
    }

    setLastName(surname) {
        return this.lastName;
    }

    getLastName() {
        return this.lastName;
    }
}