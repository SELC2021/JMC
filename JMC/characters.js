class Character {
    constructor(balance, salary, job, name) {
        this.balance = balance;
        this.salary = salary;
        this.job = job;
        this.name = name;
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
    
    setName(fullName) {
        return this.name;
    }
}