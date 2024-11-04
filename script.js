document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery-wrapper img");
    let currentIndex = 0;

    // Hide all images initially
    images.forEach((img) => img.style.display = "none");
    images[currentIndex].style.display = "block"; // Show the first image

    function showNextImage() {
        images[currentIndex].style.display = "none"; // Hide the current image
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
        images[currentIndex].style.display = "block"; // Show the next image
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});



const nameElement = document.getElementById('animated-name');
const nameText = "Ahmed Metwally";
let nameIndex = 0;

function animateName() {
    nameElement.textContent = ''; 
    nameIndex = 0; 
    
    const addCharacter = () => {
        if (nameIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(nameIndex);
            nameIndex++;
        } else {
            clearInterval(animationInterval);
        }
    };

    const animationInterval = setInterval(addCharacter, 300);
}

animateName();
