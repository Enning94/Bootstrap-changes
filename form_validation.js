const Fname = document.getElementById('formName');
const email = document.getElementById('formEmail');
const form = document.getElementById('formField');
const errorElement = document.getElementById('Error');

const isValidEmail = (email) => {
  const re = /^([a-z0-9_\-.]+)@((\[[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-z0-9-]+\.)+))([a-z]{2,4}|[0-9]{1,3})(]?)$/;
  return re.test(String(email));
};

form.addEventListener('submit', (e) => {
  const message = [];
  if (Fname.value === '' || Fname.value === null) {
    message.push('Name is required');
  }

  if (!isValidEmail(email.value)) {
    message.push('Please enter email in right format, Email should be in Lower case');
  }

  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message.join(',');
  }
});
