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
        alert("Try signing up first...");
        return false;
    }

    if (localStorage.getItem(user) != pass) {
        alert("Now who are we trying to fool here...");
        return false;
    }

    alert("Connected");
    return true;

};

function addUser() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("You've signed up");
}

