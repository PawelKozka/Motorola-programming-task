const popup = document.getElementById('popup-success');
const sendBtn = document.getElementById('send-message-button');
const form = document.getElementById('message-form');
const alert = document.getElementById('popup-alert');
const alertNameWrapper = document.getElementById('popup-alert-name-wrapper');
const alertEmailWrapper = document.getElementById('popup-alert-email-wrapper');
const closeAlert = document.getElementById('close-alert');
const popupSent = document.getElementById('popup-success');

let passed = false;

// clear alert popup messages

closeAlert.addEventListener('click', () => {
  alertNameWrapper.innerHTML = ''
  alertEmailWrapper.innerHTML = ''
  alert.classList.remove('active')
})

// disabled button 

form.addEventListener('input', e => {
  if (form.name.value.length !== 0 & form.email.value.length !== 0 & form.message.value.length !== 0) {
    sendBtn.classList.remove('disabled');
    sendBtn.disabled = false;
  } else {
    sendBtn.classList.add('disabled');
    sendBtn.disabled = true;
  }
})

const validation = () => {
  // NAME VALIDATION
  let name = form.name.value;
  const nameSpaces = name.search(/^\s+$/); //search whitespaces
  const nameWhiteSpaces = name.match(/^\s+$/); //only whitespaces
  const nameCharacters = name.search(/[^a-zA-Z]+/g); //only letters and spaces
  const firstLetters = name.match(/\b(\w)/g); //catch first latters
  let nameOk = true;
  let nameValue;
  let capitalLettersInfo = true;
  if (!nameSpaces) {
    nameValue = nameWhiteSpaces[0]
  } else { nameValue = '' }
  if (nameValue === name || !nameCharacters) {
    nameOk = false;
  }
  if (firstLetters !== null) {
    capitalLetters = firstLetters.forEach(letter => {
      if (letter !== letter.toUpperCase()) {
        capitalLettersInfo = false;
        return nameOk = false;
      }
    })
  }

  // EMAIL VALIDATION

  let email = form.email.value;
  const emailSpaces = email.search(/^\s+$/); // seach whitespaces
  const emailWhiteSpaces = email.match(/^\s+$/); // only whitespace characters
  const emailValid = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) // email regex
  let emailOk = true;
  let emailValue;
  if (!emailSpaces) {
    emailValue = emailWhiteSpaces[0]
  } else { emailValue = '' }
  if (emailValue === email || !emailValid) {
    emailOk = false;
  }

  if (!nameOk || !emailOk) {
    if (!nameOk) {
      alertNameWrapper.innerHTML += `
      <h5>Name</h5>
      ${!nameCharacters ? `<p>Use only letters and space.</p>` : ''}
      ${!capitalLettersInfo ? `<p>Each word should starts with capital letters.</p> ` : ''}
     ${nameValue === name ? `<p>It can't contain only whitespace characters.</p>` : ''}`
    }
    if (!emailOk) {
      alertEmailWrapper.innerHTML += `<h5>Email</h5>
          ${!emailValid ? `<p>Use valid email adress!</p>` : ''}
          ${emailValue === email ? `<p>It can't contain only whitespace characters.</p>` : ''}  `
    }
    alert.classList.add('active');
    return (passed = false)
  } else return (passed = true)
}
sendBtn.addEventListener('click', e => {
  e.preventDefault();
  validation();
  if (passed) {
    popupSent.classList.add('active');
    setTimeout(() => { popupSent.classList.remove('active') }, 2000);
  }
})