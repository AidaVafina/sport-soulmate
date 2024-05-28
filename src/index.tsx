import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Импортируйте AuthProvider

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AuthProvider> {/* Оберните App в AuthProvider */}
            <App />
        </AuthProvider>
    </React.StrictMode>
);
