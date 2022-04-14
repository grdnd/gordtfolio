const dropdown = document.querySelector('.dropdown');
const dropBtn = document.getElementById('dropBtn');

dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
});
