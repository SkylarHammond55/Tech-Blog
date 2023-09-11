// Function for creating a new post
const createNewPost = async (event) => {
  event.preventDefault();

  // Get the input values for title and content
  const titleInput = document.querySelector('#title-input');
  const contentInput = document.querySelector('#content-input');

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  // Check if both title and content exist
  if (title && content) {
      try {
          const response = await fetch('/api/posts', {
              method: 'POST',
              body: JSON.stringify({ title, content }),
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          // If the response is successful, redirect to the dashboard
          if (response.ok) {
              document.location.replace('/dashboard');
          } else {
              // If the response is not okay, display an error message
              alert('Failed to create a new post!');
          }
      } catch (error) {
          console.error('An error occurred:', error);
      }
  }
};

// Function for updating an existing post
const updateExistingPost = async (event) => {
  event.preventDefault();

  // Get the input values for title and content
  const titleInput = document.querySelector('#title-input');
  const contentInput = document.querySelector('#content-input');

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  // Extract the post ID from the URL
  const id = window.location.pathname.split('/').pop();

  // Check if both title and content exist
  if (title && content) {
      try {
          const response = await fetch(`/api/posts/${id}`, {
              method: 'PUT',
              body: JSON.stringify({ title, content }),
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          // If the response is successful, redirect to the dashboard
          if (response.ok) {
              document.location.replace('/dashboard');
          } else {
              // If the response is not okay, display an error message
              alert('Failed to update the post!');
          }
      } catch (error) {
          console.error('An error occurred:', error);
      }
  }
};
