// Ponto de entrada da aplicacao, por onde o Vite inicializa todo meu app

import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
