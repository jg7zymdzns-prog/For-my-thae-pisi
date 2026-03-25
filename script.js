const phrases = [
    "I'm Truly",
    "Sorry",
    "My Thae",
    "Pisi ly"
];

const textContainer = document.getElementById('text-container');
const imageHeart = document.getElementById('image-heart');

async function startAnimation() {
    for (let i = 0; i < phrases.length; i++) {
        textContainer.innerHTML = phrases[i];
        textContainer.classList.remove('fade-in');
        void textContainer.offsetWidth; // Restart animation
        textContainer.classList.add('fade-in');
        await new Promise(r => setTimeout(r, 2500));
    }
    
    textContainer.style.display = 'none';
    imageHeart.classList.remove('hidden');
}

window.onload = startAnimation;
