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

