//Rules button
function Show(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';
    }
};

//Submit Button
function Verify() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (localStorage.getItem(user) === null) {
        alert("You aren't signed up yet. Please sign up for login priveleges.");
        return false;
    }

    if (localStorage.getItem(user) != pass) {
        alert("Incorrect password. Please key in the right password.");
        return false;
    }

    alert("You are logged in successfully.");
    return true;

};

function addUser() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (localStorage.getItem(user) === null) {
        localStorage.setItem(user, pass);
        alert("You've signed up successfully.");
    }

    else alert("You have signed up already!");

}

