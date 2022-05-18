import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { robots } from './robots';
import CardList from './CardList';
import 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CardList robots = {robots}/>
    </React.StrictMode>
);
reportWebVitals();
