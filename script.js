// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.textContent = 'The text has been dynamically changed!';
    dynamicText.style.color = 'red'; // Modify CSS style
});

// Add or remove an element dynamically
document.getElementById('toggleElementButton').addEventListener('click', function() {
    const container = document.getElementById('elementContainer');
    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});