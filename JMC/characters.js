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
                addSalary(1000);                
            }
            if (option == 2) {
            }
            document.getElementById("choice1").textContent = "Buy a Red Car";
            document.getElementById("choice2").textContent = "Buy a Blue Car";
            setEverything();
            sessionStorage.setItem("choiceNum", "2");
            break;
        case 2:
            if (option == 1) { 
                addBalance(-2000);          
            }
            if (option == 2) {
                addBalance(-2500);
            }
            // NEED TO ADD PAYDAY
            document.getElementById("choice1").textContent = "Get Married";
            document.getElementById("choice2").textContent = "Hold Off for Longer";
            setEverything();
            sessionStorage.setItem("choiceNum", "3");
            break;
        case 3:
            if (option == 1) {
                addBalance(-3000);
            }
            if (option == 2) {
            }
            // NEED TO ADD FLAT TIRE
            // NEED TO ADD BUY HOUSING
            document.getElementById("choice1").textContent = "Have One Kid";
            document.getElementById("choice2").textContent = "Have Two Kids";
            setEverything();
            sessionStorage.setItem("choiceNum", "4");
            break;
        case 4:
            if (option == 1) {
                addBalance(-2000);
            }
            if (option == 2) {
                addBalance(-3000);
            }
            // NEED TO ADD GRANDPA PASSING AWAY
            // NEED TO ADD PAYDAY
            // NEED TO ADD BIRTHDAY FOR KID(S)
            document.getElementById("choice1").textContent = "Change to a Random New Job";
            document.getElementById("choice2").textContent = "Stay At Your Current Job";
            setEverything();
            sessionStorage.setItem("choiceNum", "5");
            break;
        case 5:
            if (option == 1) {
                // NEED TO ADD RANDOM JOB SELECTION
            }
            if (option == 2) {
            }
            // NEED TO CHANGE FOR RETIRING
            document.getElementById("choice1").textContent = "REPLACEMENT TEXT o1c5";
            document.getElementById("choice2").textContent = "REPLACEMENT TEXT o2c5";
            setEverything();
            break;
        }
}