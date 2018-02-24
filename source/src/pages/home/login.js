function check() {

    // data that is stored from the register-form
    var storedusername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // data that is entered from the login-form
    var username = document.getElementById("Username");
    var userpassword = document.getElementById("Password");

    // check if stored data from register-form is equal to data from login form
    if(username.value !== storedusername || userpassword.value !== storedPassword) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
        window.location.href="index.html"

    }
}

// google login//

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var user_name = profile.getName();
    localStorage.setItem('user_name',user_name);
alert(localStorage.getItem('user_name',user_name));
    window.location.href="index.html";
    alert(user_name);
}

function onLoad() {
    gapi.load('auth2,signin2', function() {
        var auth2 = gapi.auth2.init();
        auth2.then(function() {
            // Current values
            var isSignedIn = auth2.isSignedIn.get();
            var currentUser = auth2.currentUser.get();

            if (!isSignedIn) {
                // Rendering g-signin2 button.
                gapi.signin2.render('google-signin-button', {
                    'onsuccess': 'onSignIn'
                });
                window.location.href="index.html";
            }
        });
    });
}

function logout() {
    window.location.href="home.html";
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

