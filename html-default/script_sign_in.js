var email = document.getElementById("email");
var password=document.getElementById("new_password");
var length=document.getElementById("invalid_length");
var letter=document.getElementById("invalid_letter");
var number=document.getElementById("invalid_number");
var capital=document.getElementById("invalid_upper");













//2 section
email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Введите правильный адрес электронной почты!");
    } else {
        email.setCustomValidity("");
    }
    
  });

  password.onfocus = function() {
    document.getElementById("invalid_password_message").style.display = "block";
  }
  

  password.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    var wtemp=document.getElementById("w_letter_set");
    var rtemp=document.getElementById("r_letter_set");
    
    if(password.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
      wtemp.classList.remove("wrong_set");
      wtemp.classList.add("right_set");
      rtemp.classList.remove("right_set");
      rtemp.classList.add("wrong_set");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
      wtemp.classList.remove("right_set");
      wtemp.classList.add("wrong_set");
      rtemp.classList.remove("wrong_set");
      rtemp.classList.add("right_set");

  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    var wtemp=document.getElementById("w_upper_set");
    var rtemp=document.getElementById("r_upper_set");
    if(password.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
      wtemp.classList.remove("wrong_set");
      wtemp.classList.add("right_set");
      rtemp.classList.remove("right_set");
      rtemp.classList.add("wrong_set");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
      wtemp.classList.remove("right_set");
      wtemp.classList.add("wrong_set");
      rtemp.classList.remove("wrong_set");
      rtemp.classList.add("right_set");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    var wtemp=document.getElementById("w_number_set");
    var rtemp=document.getElementById("r_number_set");
    if(password.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
      wtemp.classList.remove("wrong_set");
      wtemp.classList.add("right_set");
      rtemp.classList.remove("right_set");
      rtemp.classList.add("wrong_set");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
      wtemp.classList.remove("right_set");
      wtemp.classList.add("wrong_set");
      rtemp.classList.remove("wrong_set");
      rtemp.classList.add("right_set");
    }
  
    // Validate length
    var wtemp=document.getElementById("w_length_set");
    var rtemp=document.getElementById("r_length_set");
    if(password.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
      wtemp.classList.remove("wrong_set");
      wtemp.classList.add("right_set");
      rtemp.classList.remove("right_set");
      rtemp.classList.add("wrong_set");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
      wtemp.classList.remove("right_set");
      wtemp.classList.add("wrong_set");
      rtemp.classList.remove("wrong_set");
      rtemp.classList.add("right_set");
    }
  }
