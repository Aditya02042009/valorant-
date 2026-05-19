const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('formSuccess');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const teamName = document.getElementById('teamName').value.trim();
  const captainName = document.getElementById('captainName').value.trim();
  const email = document.getElementById('email').value.trim();
  const players = document.getElementById('players').value;

  if (!teamName || !captainName || !email || !players) {
    successMessage.textContent = 'Please complete all registration fields.';
    return;
  }

  successMessage.textContent = `Team ${teamName} has been registered successfully! Check ${email} for tournament details.`;
  form.reset();
  document.getElementById('players').value = 5;
});
