function clickButton() {

    const fname        = document.getElementById('fname');
    const fname_result = document.getElementById('fname_result');
    const lname        = document.getElementById('lname');
    const lname_result = document.getElementById('lname_result');
    const email        = document.getElementById('email');
    const email_result = document.getElementById('email_result');
    const pword        = document.getElementById('pword');
    const pword_result = document.getElementById('pword_result');
    const error_fname  = document.getElementById('error_fname');
    const error_lname  = document.getElementById('error_lname');
    const error_email  = document.getElementById('error_email');
    const error_pword  = document.getElementById('error_pword');

    const reName = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/;
    const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    
    if (fname.value == "") {
        fname_result.innerHTML = "First name is empty.";
        error_fname.style.backgroundImage = "url(../images/icon-error.svg)";
    } else if (! reName.test(fname.value)) {
        fname.value = capitalize(fname.value);
    } else {
        fname_result.innerHTML = "First name is invalid.";
        error_fname.style.backgroundImage = "url(../images/icon-error.svg)";
    }

    if (lname.value == "") {
        lname_result.innerHTML = "Last name is empty.";
        error_lname.style.backgroundImage = "url(../images/icon-error.svg)";
    } else if (! reName.test(lname.value)) {
        lname.value = capitalize(lname.value);
    } else {
        lname_result.innerHTML = "Last name is invalid.";
        error_lname.style.backgroundImage = "url(../images/icon-error.svg)";
    }
  
    if(email.value == "") {
        email_result.innerHTML = "Email is empty.";
        error_email.style.backgroundImage = "url(../images/icon-error.svg)";
    } else if (! reEmail.test(email.value)) {
        email_result.innerHTML = "Email is ivalid.";
        error_email.style.backgroundImage = "url(../images/icon-error.svg)";
    }

    if (pword.value == "") {
        pword_result.innerHTML = "Password is empty.";
        error_pword.style.backgroundImage = "url(../images/icon-error.svg)";
    }
}