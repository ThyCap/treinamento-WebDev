function capitalize (str) {
    return str[0].toUpperCase() + str.slice(1);
}

//setInterval(check(),2000)

function check() {
    const fname    = document.getElementById('fname');
    const lname    = document.getElementById('lname');
    const age      = document.getElementById('age');
    const email    = document.getElementById('email');
    const pass     = document.getElementById('pass');
    const repass   = document.getElementById('repass');
    const result   = document.getElementById('result');

    const reName = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/;
    const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    result.innerHTML = "";
    result.style.color = "red";

    if (fname.value == "") {
        result.innerHTML += "First name is empty. \n";
    } else if (! reName.test(fname.value)) {
        fname.value = capitalize(fname.value);
    } else {
        result.innerHTML += "First name is invalid. \n";
    }

    if (lname.value == "") {
        result.innerHTML += "Last name is empty. \n";
    } else if (! reName.test(lname.value)) {
        lname.value = capitalize(lname.value);
    } else {
        result.innerHTML += "Last name is invalid. \n";
    }

    if(age.value == "") {
        result.innerHTML += "Age is empty. \n";
    } else if (isNaN(age.value)) {
        result.innerHTML += "Age in wrong format. \n";
    }
  
    if(email.value == "") {
        result.innerHTML += "Email is empty. \n";
    }
    else if (! reEmail.test(email.value)) {
        result.innerHTML += "Email is ivalid. \n";
    }

    if (pass.value == "" || repass.value == "") {
        result.innerHTML += "At least one of the passwords are empty. \n";
    }
    if (pass.value != repass.value) {
        result.innerHTML += "Passwords are different. \n";
    }

    if (result.innerHTML == "") {
        result.innerHTML = "All good!";
        result.style.color = "green";
    }
}
