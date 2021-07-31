// ## Part 1

const blueButton = document.getElementByIdr("#blueBtn");
const orangeButton = document.getElementById("#orangeBtn");
const greenButton = document.getElementByIdr("#greenBtn");
const jumbotron = document.getElementsByClassName(".jumbotron");
const donateButton = document.getElementsByClassName(".btn.btn-primary.btn-lrg");
const volunteerButton = document.getElementsByClassName(".btn.btn-secondary.btn-lrg");


//  **blue**
blueButton.addEventListener("click", blue);
function blue (){
    jumbotron.style.backgroundColor = "#588fbd";
    donateButton.style.backgroundColor = "#ffa500";
    volunteerButton.style.backgroundColor = "black";
    volunteerButton.style.color = "white";
}

// **orange** 
orangeButton.addEventListener("click", orange);
function orange (){
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateButton.style.backgroundColor = "black";
    volunteerButton.style.backgroundColor = "#31b0d5";
    volunteerButton.style.color = "white";
}

// **green** 
greenButton.addEventListener("click", green);
function green (){
    jumbotron.style.backgroundColor = "#87ca8a";
    donateButton.style.backgroundColor = "#5751fd";
    volunteerButton.style.backgroundColor = "#8c9c08";
}

// ## Part 2

let submitButton = document.querySelector("form button");;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let formFields = document.querySelectorAll(".form-control");
  let check = true;

// Check email
  if(!formFields[0].value.includes("@") || formFields[0].value.length === 0){
    formFields[0].style.backgroundColor = "red";
    check = false;
  } else {
    formFields[0].style.backgroundColor = "transparent";
  };

  // Check empty
  for(i = 1; i < formFields.length; i++) {
    if(formFields[i].value.length === 0){
    formFields[i].style.backgroundColor = "red";
    check = false;
    } else {
    formFields[i].style.backgroundColor = "transparent";
    }
  };

// Check field
  if(check) {
    formFields.forEach((field) => field.value = " ")
    alert("Thank you for filling out the form");
     //Display an alert to thank you for filling out the form
  };
})