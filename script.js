
// JavaScript function to navigate to another page
function navigateToLearnMore() {
    window.location.href = "learnMore.html"; // Change this to the URL or file path
}
function navigateToGoBack() {
    window.location.href = "index.html"; // Change this to the URL or file path
}
function navigateToParalympics() {
    window.location.href = "indexTwo.html"; // Change this to the URL or file path
}




// Add JavaScript code for your web site here and call it from index.html.
function checkAnswerDots(city) {
    
    const answer = document.getElementById('answer');
    const description = document.getElementById('city-info');
    
    if (city === 'olympia') {
        answer.textContent = "The correct answer is Olympia!";
        description.textContent = "The origins of the Olympic Games date back to around 776 BC in Olympia, Greece, where athletes gathered to compete in honor of Zeus, the kind of the Greek gods. Initially, there was only one event, a footrace called the “station,” which was about 192 meters long. Over time, the Games grew to include many different sports and became a major religious festival that celebrated athletic sill and unity among the Greek city-states.";
    
    } else if (city === 'athens') {
        answer.textContent = "Sorry, Athens is not the correct answer.";
        description.textContent = "Athens was a powerful city-state in ancient Greece, known as the birthplace of democracy and philosophy. It also hosted the first modern Olympic Games in 1896.";
    
    } else if (city === 'sparta') {
        answer.textContent = "Sorry, Sparta is not the correct answer.";
        description.textContent = "Sparta was a military-focused city-state famous for its highly disciplined warriors and strict society. It rivaled Athens in power and influence during ancient times.";
    
    } else if (city === 'corinth') {
        answer.textContent = "Sorry, Corinth is not the correct answer.";
        description.textContent = "Corinth was a wealthy and influential city-state, known for its trade and strategic location. It played a key role in Ancient Greek culture and politics.";

    } else {

    }
}

function showTheo() {
    
    const theoImage = document.getElementById("tedious-image");
    const secondHover = document.getElementById("second-hover");
    const thirdHover = document.getElementById("third-hover");

    theoImage.classList.toggle("show");

    secondHover.classList.toggle("hide");
    thirdHover.classList.toggle("hide");
}


function flipCard(cardInner) {
    cardInner.classList.toggle('flip');
}




// Learn More Javascript 
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const rectangles = {
        circleRed: document.querySelector("#rectRed"),
        circleBlack: document.querySelector("#rectBlack"),
        circleBlue: document.querySelector("#rectBlue"),
        circleGreen: document.querySelector("#rectGreen"),
        circleYellow: document.querySelector("#rectYellow"),
    };

    const texts = {
        circleRed: "The red ring symbolizes the <strong>Americas</strong>, including North and South America, where many unforgettable Olympic moments have taken place.",
        circleBlack: "The black ring represents <strong>Africa</strong>, known for its rich heritage and the incredible athletes who have come from this region.",
        circleBlue: "The blue ring stands for <strong>Europe</strong>, the birthplace of the modern Olympics, where many early Games were held.",
        circleGreen: "The green ring symbolizes <strong>Oceania</strong>, which includes countries like Australia and New Zealand, known for their passion for sports.",
        circleYellow: "The yellow ring symbolizes <strong>Asia</strong>, the largest continent and home to many diverse cultures and countries.",
    };

    circles.forEach((circle) => {
        circle.addEventListener("click", () => {
            const rect = rectangles[circle.id];
            const isMoved = circle.classList.contains("moved");

            if (isMoved) {
                // Move the circle back to its original position
                circle.style.transform = "translateX(0)";
                circle.classList.remove("moved");
                // Remove text from the rectangle
                rect.innerHTML = "";
            } else {
                // Move the circle 300px to the left
                circle.style.transform = "translateX(900px)";
                circle.classList.add("moved");
                circle.style.transition = "transform 0.5s";
                
                // Create and add a text container inside the rectangle
                const textContainer = document.createElement("div");
                textContainer.innerHTML = texts[circle.id]; // Using innerHTML renders <strong> properly
                textContainer.style.color = "black";
                textContainer.style.fontSize = "40px";
                textContainer.style.fontFamily = "'Josefin Sans', serif";
                textContainer.style.textAlign = "left";
                textContainer.style.fontWeight = "10";
                textContainer.style.width = "700px"; 
                textContainer.style.marginLeft = "150px";
                textContainer.style.paddingTop = "130px";    
                
                rect.appendChild(textContainer);
            }
        });
    });
});



function toggleText(textId) {
    
    const textElement = document.getElementById(textId);
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}

function checkAnswer(milestone) {
    
    const imageToShow = document.getElementById(milestone);
    document.querySelectorAll('.milestone-image').forEach(image => {
        image.style.display = 'none';
    });
    if (imageToShow) {
        imageToShow.style.display = 'block';
    }
}

