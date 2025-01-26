const textElement = document.getElementById("text");
const words = [" Developer", "n Athlete", " Student"]; // Corrected "an Athlete"
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentWord = words[wordIndex];

  // Holy shit it look me way too long to figure this out
  textElement.textContent = `I'm a${currentWord.slice(0, charIndex)}`;

  if (!isDeleting && charIndex < currentWord.length) {
    // Typing forward
    charIndex++;
    setTimeout(typeLoop, 100); // Typing speed
  } else if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => {
      isDeleting = true;
      typeLoop();
    }, 2000); // 2-second pause
  } else if (isDeleting && charIndex > 0) {
    // Deleting backward
    charIndex--;
    setTimeout(typeLoop, 65); // Backspacing speed
  } else if (isDeleting && charIndex === 0) {
    // Move to the next word and restart typing
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Cycle to the next word
    setTimeout(typeLoop, 100); // Short pause before typing the next word
  }
}

typeLoop();

function hamburg(){
                const navbar = document.querySelector(".dropdown")
                navbar.style.transform = "translateY(0px)"
            }
            function cancel(){
                const navbar = document.querySelector(".dropdown")
                navbar.style.transform = "translateY(-500px)"
            }
