let c1;

function setCharacter(bal, pay, position, name, surname) {
    c1 = new Character(bal, pay, position, name, surname);
    //console.log(c1);
    sessionStorage.setItem("character", "c1");
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