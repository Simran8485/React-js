let user = [];
let id = 0;

function create(username, userphone, userage) {
    let i = user.length;
    user[i] = {
        name: username,
        contact: userphone,
        age: userage,
        amount: 0,
        account_number: i + 1
    };
    console.log("Account created with following details:-");
    console.log(`Name: ${user[i].name}`);
    console.log(`Account number: ${user[i].account_number}`);
    console.log(`Available balance: ${user[i].amount}\n`);
}

function deposit(acc_number, input_amount) {
    let m = check_acc(acc_number);
    if (m === -1) {
        console.log("Account number is not found in the database..\n");
        return;
    }
    user[m].amount += input_amount;
    console.log("Amount deposited successfully..\n");
}

function withdraw(acc_number, input_amount) {
    let m = check_acc(acc_number);
    if (m === -1) {
        console.log("Account number is not found in the database..\n");
        return;
    }
    if (user[m].amount < input_amount) {
        console.log("Insufficient funds.\n");
    } else {
        user[m].amount -= input_amount;
        console.log("Amount withdrawn successfully..\n");
    }
}

function saving(acc_number) {
    let m = check_acc(acc_number);
    if (m === -1) {
        console.log("Account number is not found in the database..\n");
        return;
    }
    console.log(`Available amount of ${user[m].name} is: ${user[m].amount}\n`);
}

function check_acc(x) {
    for (let j = 0; j < user.length; j++) {
        if (user[j].account_number === x) {
            return j;
        }
    }
    return -1;
}

// Create accounts
create("Simran", 8765, 34);
create("Sourabh", 7890, 18);
create("Ankita", 3456, 77);

// Perform transactions
deposit(2, 500);
saving(2);
withdraw(2, 240);
saving(2);

deposit(1, 19000);
withdraw(1, 1500);
saving(1);

saving(3);
