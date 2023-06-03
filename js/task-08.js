
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Please fill in all fields');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(formData);

  loginForm.reset();
}