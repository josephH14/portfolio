function myFunction() {
    alert("Your form has been submitted!");
}

function submitContractForm() {
    var x = document.forms["contactForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    } else {
        alert('Thank you for submitting the form');
    }  
}

