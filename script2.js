//get data
const nameInput = document.querySelector('#name');
const number = document.querySelector('#number');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');
//validate data
function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = 'Name cannot be blank';
    nameInput.classList.add('error-border');
    errorFlag = true;
  }

  if (!numberIsValid(number.value)) {
    errorNodes[1].innerText = 'Invalid Number';
    number.classList.add('error-border');
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[2].innerText = 'Invalid email address';
    emailInput.classList.add('error-border');
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[3].innerText = 'Please Enter Message';
    message.classList.add('error-border');
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = 'Success!';
  }
}
// clear error / message success
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = '';
  }
  success.innerText = '';
  nameInput.classList.remove('error-border');
  number.classList.remove('error-border');
  email.classList.remove('error-border');
  message.classList.remove('error-border');
}

function numberIsValid(number) {
  let pattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
  return pattern.test(number);
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
