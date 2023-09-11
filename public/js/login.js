const handleFormSubmit = async (event, endpoint) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
      try {
          const response = await fetch(endpoint, {
              method: 'POST',
              body: JSON.stringify({ username, password }),
              headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
              document.location.replace('/dashboard');
          } else {
              alert('Failed to login or sign up.');
          }
      } catch (error) {
          console.error('An error occurred:', error);
      }
  }
};

document.querySelector('#login-form').addEventListener('submit', (event) => {
  handleFormSubmit(event, '/api/users/login');
});

document.querySelector('#signup-form').addEventListener('submit', (event) => {
  handleFormSubmit(event, '/api/users/signup');
});
