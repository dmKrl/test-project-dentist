import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import App from './app/App.tsx';
import './app/styles/index.css';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
