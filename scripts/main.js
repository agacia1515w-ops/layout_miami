const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}