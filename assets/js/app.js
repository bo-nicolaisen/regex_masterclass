

const submitButton = document.getElementById("submit")
let nameValid = false;


//console.log(submitButton);

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // stops browser from reload

    const userEmail = document.getElementById('email').value


    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/g;

    let emailValid = emailRegex.test(userEmail);


    
   if (emailValid && nameValid) {
   

createThankyouPage();

   } else if(!emailValid) {
      document.getElementById('email').style="outline: 2px solid red"
 document.getElementById('response').innerText="du har tastet forkert email"
   } else if(!nameValid) {
    document.getElementById('response').innerText="du har tastet forkert navn"
   }

})




const nameField = document.getElementById("name")

nameField.addEventListener('keyup', (event) => {
    const userName = event.target.value;
    const nameRegex = /^[a-zA-ZæøåÆØÅ.\- ]{2,30}$/g;
     nameValid = nameRegex.test(userName);

    if (nameValid) {
        nameField.style="outline: 2px solid green"
        //document.getElementById('nameResponse').innerText = "navn ok"
    } else {
         nameField.style="outline: 2px solid red"
       // document.getElementById('nameResponse').innerText = "navn forkert"
    }
})


function createThankyouPage() {
    document.body.innerHTML = "";
    let thankYouMessage = document.createElement("h1");
    thankYouMessage.innerText = "Thank you for signing up!";
    document.body.appendChild(thankYouMessage);
}   














































/* 
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
} */