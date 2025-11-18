




let mySubmit = document.getElementById("submit");


mySubmit.addEventListener("click", function (event) {
    event.preventDefault();
    if (validateForm()) {
        createThankyouPage();
    }
    else {
        alert("Please fill out the form correctly.");
    }

});



function validateForm() {

    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;

    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/g;
    let emailValid = emailRegex.test(email);

    let nameRegex = /[a-z,A-Z,æøå,ÆØÅ.-]/g;

    let namePass = nameRegex.test(name);



    if (!emailValid) {
        alert("Invalid Email Address");
        return false;
    }
    if (!namePass) {
        alert("Password must be minimum eight characters, at least one letter and one number");
        return false;
    }

    return true;
}

function createThankyouPage() {
    document.body.innerHTML = "";
    let thankYouMessage = document.createElement("h1");
    thankYouMessage.innerText = "Thank you for signing up!";
    document.body.appendChild(thankYouMessage);
}