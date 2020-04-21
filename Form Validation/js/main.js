function capitalize (str) {
    return str[0].toUpperCase() + str.slice(1);
}

//setInterval(check(),2000)

function check() {
    fname    = document.getElementById('fname').value;
    lname    = document.getElementById('lname').value;
    age      = document.getElementById('age').value;
    email    = document.getElementById('email').value;
    pass     = document.getElementById('pass').value;
    repass   = document.getElementById('repass').value;

    document.getElementById('result').innerHTML = ""
    if (isNaN(age)) {
        document.getElementById('result').innerHTML += "Age in wrong format. \n"
    }
    if (pass != repass) {
        document.getElementById('result').innerHTML += "Passwords are different. \n"
    }
    
    try {
        document.getElementById('fname').value = capitalize(fname);
    } catch(err) {
        document.getElementById('result').innerHTML += "First name is ivalid. \n"
    }

    try {
        document.getElementById('lname').value = capitalize(lname);
    } catch(err) {
        document.getElementById('result').innerHTML += "Last name is ivalid. \n"
    }
}
