import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//reactdom =  가상으로 만든 뒤 앞으로 만들 내용들을 다 넣은 뒤 변경된 후 바꿔 'root'에 그려준다.
root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
