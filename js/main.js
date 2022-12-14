document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  });
})