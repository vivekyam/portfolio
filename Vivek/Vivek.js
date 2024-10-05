
// Vivek.js

// Function to show an alert when clicking on a project title
document.addEventListener("DOMContentLoaded", function() {
    const projectTitles = document.querySelectorAll('.project h3');
    
    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            alert(`You clicked on: ${this.innerText}`);
        });
    });
});
