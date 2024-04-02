// Resource object containing solutions:
const solutions = {
    solution1: {
        heading: document.querySelector('.content:nth-child(2) h2').textContent,
        imgUrl: document.querySelector('.content:nth-child(2) img').src,
        description: document.querySelector('.content:nth-child(2) p').textContent
    },
    solution2: {
        heading: document.querySelector('.content:nth-child(3) h2').textContent,
        imgUrl: document.querySelector('.content:nth-child(3) img').src,
        description: document.querySelector('.content:nth-child(3) p').textContent
    },
    solution3: {
        heading: document.querySelector('.content:nth-child(4) h2').textContent,
        imgUrl: document.querySelector('.content:nth-child(4) img').src,
        description: document.querySelector('.content:nth-child(4) p').textContent
    }
};

// Function to initialize the content on page load:
function initializeContent() {
    const defaultSolution = solutions.solution1;
    document.querySelector('.content h2').textContent = defaultSolution.heading;
    document.querySelector('.content img').src = defaultSolution.imgUrl;
    document.querySelector('.content p').textContent = defaultSolution.description;
}

// Function to handle button clicks:
function handleButtonClick(solutionKey) {
    // Remove 'active' class from all buttons:
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add 'active' class to clicked button:
    const clickedButton = document.getElementById(solutionKey);
    clickedButton.classList.add('active');

    // Display corresponding content:
    const selectedSolution = solutions[solutionKey];
    document.querySelector('.content h2').textContent = selectedSolution.heading;
    document.querySelector('.content img').src = selectedSolution.imgUrl;
    document.querySelector('.content p').textContent = selectedSolution.description;
}

// Add click event listener to each button:
document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('click', function(event) {
        handleButtonClick(event.target.id);
    });
});

// Initialize content on page load:
initializeContent();
