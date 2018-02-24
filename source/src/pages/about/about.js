
// storing input from register-form
function store() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var email = document.getElementById('email');

    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('email', email.value);
}


function revalidate()

{
    if(document.getElementById("username").value ==="")
    {
        //document.getElementById('username').innerHTML = "User name field should not be empty";
       // document.getElementById("username").focus();
        //return(false);
        alert("enter username and password");
    }

    if(document.getElementById("email").value==="")
    {
        document.getElementById('email').innerHTML = "Email id reqiured";
        document.getElementById("email").focus();
        return(false);
    }

    if(document.getElementById("password").value==="")
    {
        document.getElementById('password').innerHTML = "Please type a password";
        document.getElementById("password").focus();
        return(false);
    }

    else
    {
        return(true);
    }
}