// Get reference to the submit button
const submitButton = document.getElementById("submit")
// Variable to track if the name field is valid
let nameValid = false;


//console.log(submitButton);

// Event listener for submit button click
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // stops browser from reload

    // Get the email value from the input field
    const userEmail = document.getElementById('email').value

    // Regex pattern to validate email format
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/g;

    // Test if the email matches the regex pattern
    let emailValid = emailRegex.test(userEmail);


    // Check if both email and name are valid
   if (emailValid && nameValid) {
   
// Show thank you page if validation passes
createThankyouPage();

   } else if(!emailValid) {
      // Show error styling and message for invalid email
      document.getElementById('email').style="outline: 2px solid red"
 document.getElementById('response').innerText="du har tastet forkert email"
   } else if(!nameValid) {
    // Show error message for invalid name
    document.getElementById('response').innerText="du har tastet forkert navn"
   }

})



// Get reference to the name input field
const nameField = document.getElementById("name")

// Event listener that validates name as user types
nameField.addEventListener('keyup', (event) => {
    // Get the current value from the name field
    const userName = event.target.value;
    // Regex pattern to validate name (allows letters, Danish characters, dots, hyphens, spaces, 2-30 chars)
    const nameRegex = /^[a-zA-ZæøåÆØÅ.\- ]{2,30}$/g;
    // Test if the name matches the regex pattern
     nameValid = nameRegex.test(userName);

    // Show green outline if name is valid
    if (nameValid) {
        nameField.style="outline: 2px solid green"
        //document.getElementById('nameResponse').innerText = "navn ok"
    } else {
        // Show red outline if name is invalid
         nameField.style="outline: 2px solid red"
       // document.getElementById('nameResponse').innerText = "navn forkert"
    }
})

// Function to create and display a thank you page after successful form submission
function createThankyouPage() {
    // Clear all content from the page
    document.body.innerHTML = "";
    // Create a new h1 element for the thank you message
    let thankYouMessage = document.createElement("h1");
    // Set the text content
    thankYouMessage.innerText = "Thank you for signing up!";
    // Add the message to the page
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