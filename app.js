// This implements a simple State Machine using Standard JavaScript.

// 1. Define the possible states (The text for the button in each phase)
const STATES = [
    "Click to Start",        // State 0: Initial
    "Action Complete",       // State 1: After first click
    "Reset and Loop"         // State 2: After second click
];

// 2. Initialize the current state index (Starts at 0)
let currentStateIndex = 0;

// 3. Define the click handler function
function handleButtonClick() {
    // a. Get the button element by its ID
    const button = document.getElementById('stateButton');

    // b. Move to the next state, cycling back to 0 (length of 3) if we hit the end
    currentStateIndex = (currentStateIndex + 1) % STATES.length;

    // c. Update the button's text content
    button.textContent = STATES[currentStateIndex];

    // Optional: You can add simple logic here based on the state index
    // if (currentStateIndex === 1) {
    //     console.log("Triggering complex background task...");
    // }
}

// 4. Define the initial HTML structure
const initialContent = `
    <div>
        <h1>Dynamic State Management Example</h1>
        <p>This demonstrates the kind of cycling complexity you expect from a GUI.</p>
        <button id="stateButton">${STATES[currentStateIndex]}</button>
    </div>
`;

// 5. Insert the initial content into the page and attach the event listener
// This uses pure JS to run immediately when the page loads.
const rootElement = document.getElementById('root');

// Insert the HTML structure
if (rootElement) {
    rootElement.innerHTML = initialContent;

    // Attach the event listener to the newly created button
    const buttonElement = document.getElementById('stateButton');
    if (buttonElement) {
        buttonElement.onclick = handleButtonClick;
    }
}
