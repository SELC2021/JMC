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
    sessionStorage.setItem("car", "null");
    sessionStorage.setItem("relationship", "single");
    sessionStorage.setItem("kids", "0")
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

function setCar(color) {
    sessionStorage.setItem("car", color);
}

function setRelationship(status) {
    sessionStorage.setItem("relationship", status);
}

function addKids(amount) {
    sessionStorage.setItem("kids", parseInt(sessionStorage.getItem("kids"), 10) + amount);
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
    let choice = parseInt(sessionStorage.getItem("choiceNum"), 10);
    switch(choice) {
        case 1:
            if (option == 1) {
                addSalary(1000);                
            }
            if (option == 2) {
            }
            document.getElementById("choice1").textContent = "Buy a Blue Car for $2,000";
            document.getElementById("choice2").textContent = "Buy a Red Car for $2,500";
            setEverything();
            sessionStorage.setItem("choiceNum", "2");
            break;
        case 2:
            if (option == 1) { 
                addBalance(-2000);
                setCar("Blue");     
            }
            if (option == 2) {
                addBalance(-2500);
                setCar("Red");
            }
            // ADD PAYDAY MESSAGE
            let newSal = parseInt(sessionStorage.getItem("salary"), 10);
            addBalance(newSal);
            document.getElementById("choice1").textContent = "Get Married";
            document.getElementById("choice2").textContent = "Hold Off for Longer";
            setEverything();
            sessionStorage.setItem("choiceNum", "3");
            break;
        case 3:
            if (option == 1) {
                addBalance(-3000);
                setRelationship("married");
                // ADD BUY HOUSING MESSAGE
                addBalance(-2000);
            }
            if (option == 2) {
                // ADD BUY HOUSING MESSAGE
                addBalance(-3000);
            }
            // ADD FLAT TIRE MESSAGE
            let carColor = sessionStorage.getItem("car")
            if (carColor == "Blue") {
                addBalance(-750);
            }
            if (carColor == "Red") {
                addBalance(-500);
            }
            document.getElementById("choice1").textContent = "Have One Kid";
            document.getElementById("choice2").textContent = "Have Two Kids";
            setEverything();
            sessionStorage.setItem("choiceNum", "4");
            break;
        case 4:
            if (option == 1) {
                addBalance(-2000);
                addKids(1);
            }
            if (option == 2) {
                addBalance(-3000);
                addKids(2);
            }
            document.getElementById("choice1").textContent = "Change to a Random New Job";
            document.getElementById("choice2").textContent = "Stay At Your Current Job";
            setEverything();
            sessionStorage.setItem("choiceNum", "5");
            break;
        case 5:
            if (option == 1) {
                // ADD RANDOM JOB SELECTION MESSAGE
                let randomNum = Math.floor(Math.random() * 6);
                let randomJob;
                switch (randomNum) {
                    case 0:
                        randomJob = "Janitor";
                        addSalary(-3000);
                        break;
                    case 1:
                        randomJob = "Manager";
                        addSalary(2000);
                        break;
                    case 2:
                        randomJob = "Teacher";
                        addSalary(3000);
                        break;
                    case 3:
                        randomJob = "Nanny";
                        addSalary(1000);
                        break;
                    case 4:
                        randomJob = "Mechanic";
                        addSalary(-1000);
                        break;
                    case 5:
                        randomJob = "Landscaper";
                        addSalary(-2000);
                        break;
                }
                setJob(randomJob);
                setEverything();
            }
            if (option == 2) {
            }
            // ADD GRANDPA PASSING AWAY MESSAGE
            let status = sessionStorage.getItem("relationship")
            if (status == "married") {
                addBalance(-3000);
            }
            if (status == "single") {
                addBalance(2000);
            }
            // ADD PAYDAY MESSAGE
            let newSal2 = parseInt(sessionStorage.getItem("salary"), 10);
            addBalance(newSal2);
            // ADD BIRTHDAY FOR KID(S) MESSAGE
            let numKids = parseInt(sessionStorage.getItem("kids"), 10);
            if (numKids == 1) {
                addBalance(3000);
            }
            if (numKids == 2) {
                addBalance(6000);
            }
            setEverything();
            // ADD MESSAGE FOR RETIRING AND END
            break;
        }
}
