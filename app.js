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
    var userRef = "sunilvm";
    var passRef = "nothingness";

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef && pass == passRef) {
        alert("Connected");
        return true;
    } else {
        alert("Now who are we trying to fool here...");
        return false;
    }
};

