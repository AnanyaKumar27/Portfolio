// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show the button after 3.5 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('skills-message').style.display = 'inline-block';
    }, 3500);
});

document.addEventListener("DOMContentLoaded", function() {
    // Button display logic
    setTimeout(() => {
        document.getElementById('skills-message').style.display = 'inline-block';
    }, 3500);

    // Text replacement logic
    document.getElementById("skills-message").addEventListener("click", function () {
        document.getElementById("skillsParagraph").innerHTML =
          `Exploring new places and cultures gives me fresh ideas (and amazing stories to tell).<br>
           Music is my constant companion — from coding jams to chill vibes.<br>
           Sports and outdoor adventures keep me energized and creative.<br>
           I’m always up for learning something quirky or diving into random hobbies that spark curiosity.<br>
           Collaborating with others is my favorite way to turn ideas into something awesome.`;
    });
});
