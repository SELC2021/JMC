function setCharacter(bal, pay, position, name, surname) {
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
    sessionStorage.setItem("choiceNum", "1");
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

function setEverything() {
    let firstname = sessionStorage.getItem("firstname");
        let name = document.getElementById("name");
        name.innerHTML = firstname;

        let balance = sessionStorage.getItem("balance");
        let bal = document.getElementById("bal");
        bal.innerHTML = balance;

        let salary = sessionStorage.getItem("salary");
        let sal = document.getElementById("sal");
        sal.innerHTML = salary;

        let job = sessionStorage.getItem("job");
        let position = document.getElementById("position");
        position.innerHTML = job;

        let lastname = sessionStorage.getItem("lastname");
        let surname = document.getElementById("surname");
        surname.innerHTML = lastname;
}

function choice(option) {
    let choice = parseInt(sessionStorage.getItem("choiceNum"), 10)
    switch(choice) {
        case 1:
            if (option == 1) {
                // call to function
                document.getElementById("choice1").textContent = "REPLACEMENT TEXTo1c1";
                setEverything();
            }
            if (option == 2) {
                // call to function
                document.getElementById("choice2").textContent = "REPLACEMENT TEXTo1c1";
                setEverything();
            }
            sessionStorage.setItem("choiceNum", "2");
            break;
        case 2:
            if (option == 1) {
                // call to function
                document.getElementById("choice1").textContent = "REPLACEMENT TEXTo1c2";
                setEverything();
            }
            if (option == 2) {
                // call to function
                document.getElementById("choice2").textContent = "REPLACEMENT TEXTo2c2";
                setEverything();
            }
            sessionStorage.setItem("choiceNum", "2");
            break;
        }
}