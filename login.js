import promptSync from 'prompt-sync';
const prompt = promptSync();

export function loginMenu(){
    console.log("|| ==== LOGIN ==== ||");
    console.log("|| 1 - Login       ||");
    console.log("|| 2 - Register    ||");
    console.log("|| 0 - Exit        ||");
    console.log("|| =============== ||");
    return parseInt(prompt("|| ? - Choice: "));
}

export function doLogin(){
    console.log("\n|| ==== LOGIN ==== ||");
    let email = prompt("|| E-mail: ");
    let password = prompt("|| Password: ");
    return {email: email, password:password}
    
}

export function registerUser(users) {
    console.log("\n|| ==== REGISTER ==== ||");
    let email;
    while(true){
        email = prompt("|| Insert your e-mail: ");

        if (findUserByEmail(email, users)) {
            console.log("|| This e-mail already exists ||");
        }else{
            break;
        }
    }

    while(true){
        let password = prompt("|| Insert your password: ");
        let confirmPassword = prompt("|| Confirm your password: ");

        if(password != confirmPassword){
            console.log("\n|| Passwords don't match. Try again! ||\n");
        }else{
            const user = {
                email: email,
                password: password
            };
            return user;
        }
    }
}

export function findUserByEmail(email, users) {
    return users.find(user => user.email === email);
}


