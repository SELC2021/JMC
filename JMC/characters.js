function setCharacter(bal, pay, position, name, surname) {
    sessionStorage.setItem("balance", bal);
    sessionStorage.setItem("salary", pay);
    sessionStorage.setItem("job", position);
    sessionStorage.setItem("firstname", name);
    sessionStorage.setItem("lastname", surname);
    sessionStorage.setItem("choiceNum", "1");
    sessionStorage.setItem("car", "null");
    sessionStorage.setItem("relationship", "single");
    sessionStorage.setItem("kids", "0");
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

function alertButton(text) {
    document.getElementById("alertText").textContent = text;
    document.getElementById("alert").style.backgroundColor = "ivory";
    document.getElementById("alertButton").style.display = "inline";
}

function disButton() {
    document.getElementById("alert").style.display = "none";
    document.getElementById("alertButton").style.display = "none";
}

function choice(option) {
    let choice = parseInt(sessionStorage.getItem("choiceNum"), 10);
    let person = sessionStorage.getItem("firstname");
    let birthdayMoney = 0;
    let grandpaText1 = "";
    let grandpaText2 = "";
    let grandpaAmount;
    let randomJob;
    let newSal2;

    switch(choice) {
        case 1:
            if (option == 1) {  
                addSalary(1000);        
            }
            if (option == 2) {
            }
            document.getElementById("choice1").textContent = "Buy a Blue Car";
            document.getElementById("choice2").textContent = "Buy a Red Car";

            document.getElementById("img1").src = "bluecar.jpg";
            document.getElementById("img2").src = "redcar.jpg";

            setEverything();
            sessionStorage.setItem("choiceNum", "2");
            break;
        case 2:
            let bluePrice = -1;
            let redPrice = -1;
            if (person == "Sarah") {
                bluePrice = -2000;
                redPrice = -2500;
            } else if (person == "Kyle") {
                bluePrice = -1000;
                redPrice = -1500;
            } else {
                bluePrice = -1500;
                redPrice = -2000;
            }
            if (option == 1) { 
                addBalance(bluePrice);
                setCar("Blue");     
            }
            if (option == 2) {
                addBalance(redPrice);
                setCar("Red");
            }
            let newSal = parseInt(sessionStorage.getItem("salary"), 10);
            addBalance(newSal);
            alertButton("Today is payday! You got paid $" + newSal);  
            document.getElementById("choice1").textContent = "Get Married";
            document.getElementById("choice2").textContent = "Hold Off for Longer";

            document.getElementById("img1").src = "marriage.jpg";
            document.getElementById("img2").src = "no.jpg";

            setEverything();
            sessionStorage.setItem("choiceNum", "3");
            break;
        case 3:
            let marriedCost = -1;
            if (person == "Sarah") {
                marriedCost = -3000;
            } else if (person == "Kyle") {
                marriedCost = -2000;
            } else {
                marriedCost = -1000;
            }
            if (option == 1) {
                addBalance(marriedCost);
                setRelationship("married");
                alertButton("Congratulations! You and your spouse bought a house for $" + Math.abs(marriedCost)); 
                addBalance(-2000);
            }
            if (option == 2) {
                alertButton("Congratulations! You bought an apartment for $3000"); 
                addBalance(-3000);
            }
            let carColor = sessionStorage.getItem("car");
            if (carColor == "Blue") {
                alertButton("You got a flat tire. Pay $750 in repair costs"); 
                addBalance(-750);
            }
            if (carColor == "Red") {
                alertButton("You got a flat tire. Pay $500 in repair costs"); 
                addBalance(-500);
            }
            document.getElementById("choice1").textContent = "Have One Kid";
            document.getElementById("choice2").textContent = "Have Two Kids";

            document.getElementById("img1").src = "child.jpg";
            document.getElementById("img2").src = "children.jpg";

            setEverything();
            sessionStorage.setItem("choiceNum", "4");
            break;
        case 4:
            if (option == 1) {
                if (person == "Sarah") {
                    addBalance(-2000);
                } else {
                    addBalance(-1000);
                }
                addKids(1);
            }
            if (option == 2) {
                if (person == "Sarah") {
                    addBalance(-3000);
                } else {
                    addBalance(-2000);
                }
                addKids(2);
            }
            document.getElementById("choice1").textContent = "Change to a Random New Job";
            document.getElementById("choice2").textContent = "Stay At Your Current Job";

            document.getElementById("img1").src = "newjob.jpg";
            document.getElementById("img2").src = "job2.jpg";

            setEverything();
            sessionStorage.setItem("choiceNum", "5");
            break;
        case 5:
            if (option == 1) {
                let randomNum = Math.floor(Math.random() * 6);
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
                document.getElementById("option1").disabled = true;
                document.getElementById("option2").disabled = true;
            }
            if (option == 2) {
                document.getElementById("option1").disabled = true;
                document.getElementById("option2").disabled = true;
            }
            let status = sessionStorage.getItem("relationship");
            let funeralCost = -1;
            let inheritance = -1;
            if (person == "Sarah") {
                funeralCost = -3000;
                inheritance = 2000;
            } else if (person == "Kyle") {
                funeralCost = -2000;
                inheritance = 1000;
            } else {
                funeralCost = -2000;
                inheritance = 3000;
            }
            if (status == "married") {
                addBalance(funeralCost);
                grandpaText1 = "You must pay $";
                grandpaText2 = " for the funeral";
                grandpaAmount = Math.abs(funeralCost);
            }
            if (status == "single") {
                addBalance(inheritance);
                grandpaText1 = "You gain $";
                grandpaText2 = " in inhertiance";
                grandpaAmount = inheritance;
            }
            newSal2 = parseInt(sessionStorage.getItem("salary"), 10);
            addBalance(newSal2);
            let numKids = parseInt(sessionStorage.getItem("kids"), 10);
            let birthdayMoney = 0;
            if (numKids == 1) {
                if (person == "Sarah") {
                    addBalance(3000);
                    birthdayMoney += 3000;
                } else {
                    addBalance(2000);
                    birthdayMoney += 2000;
                }
            }
            if (numKids == 2) {
                if (person == "Sarah") {
                    addBalance(6000);
                    birthdayMoney += 6000;
                } else {
                    addBalance(4000);
                    birthdayMoney += 4000;
                }
            }
            document.getElementById("retire").style.display = "inline";
            alertButton("You got a job as a " + randomJob.toLowerCase() + ". Your salary is now $" + sessionStorage.getItem("salary") + "\nYour grandfather sadly passed away. " + grandpaText1 + grandpaAmount + grandpaText2 + "\nToday is payday! You got paid $" + newSal2 + "\nIt's your child's birthday! You earned $" + birthdayMoney + " in birthday money");
            setEverything();
            break;
        }
}