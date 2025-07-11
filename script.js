const RATING_BUTTONS = document.querySelectorAll('.rating-buttons button');
const RATING_VALUE = document.getElementById('rating-value');

RATING_BUTTONS.forEach(button => {
    button.addEventListener('click', () => {
        RATING_BUTTONS.forEach(btn => btn.classList.remove('selected'));
        // Remove 'selected' class from all buttons
        button.classList.add('selected');
        // Add 'selected' class to the clicked button
        // Set the value of the hidden input field to the data-value of the clicked button
        RATING_VALUE.value = button.getAttribute('data-value');
    });
});