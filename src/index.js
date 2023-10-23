import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Content from './Component/Content/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Navbar/>
    <Content/>
    <Footer/>
  </React.StrictMode>
);


reportWebVitals();
