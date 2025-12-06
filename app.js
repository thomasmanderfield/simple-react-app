// The component is the functional unit, like a button object with its script attached.
function SimpleButton() {
    // 1. STATE: A variable that holds data (the message)
    const [message, setMessage] = React.useState('Click Me!');

    // 2. THE HANDLER: The function that runs when the button is clicked
    const handleClick = () => {
        setMessage('Button was clicked!');
    };

    // 3. THE VISUAL ELEMENT (JSX): Defines the visual elements
    return (
        <div>
            <h1>React Button Example</h1>
            <button onClick={handleClick}>
                {message}
            </button>
            <p>This is all running with no complex setup!</p>
        </div>
    );
}

// 4. RENDER: This command initiates the display.
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<SimpleButton />);

// ------------------------------------------------------------------
// EASTER EGG LOGIC: The feature placeholder for object time travel
// ------------------------------------------------------------------

// Konami Code sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];
let konamiIndex = 0;

// Listen for keyboard events on the whole document
document.addEventListener('keydown', (event) => {
    // Check if the current key (converted to lowercase) matches the next key in the sequence
    if (event.key.toLowerCase() === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
    } else {
        // Reset the sequence if the wrong key is pressed
        konamiIndex = 0;
    }

    // Check if the entire sequence has been entered
    if (konamiIndex === KONAMI_CODE.length) {
        const message = document.getElementById('easter-egg-message');
        if (message) {
            // Reveal the hidden message by changing its style
            message.style.display = 'block';
        }
        // Reset the index so it can be triggered again
        konamiIndex = 0;
    }
});
