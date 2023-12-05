import { createRoot } from 'react-dom';
import App from './App'; // Import your main App component

// Create a root for rendering your app
const root = createRoot(document.getElementById('root')); // Replace 'root' with your root element ID

// Render your app within the root
root.render(<App />);
