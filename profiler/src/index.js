import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var dataObject = {
  name: "Michelle Curry",
  imgURL: "https://i1.sndcdn.com/artworks-nHlSy5qHA8PfsPQb-QxfQ7Q-t500x500.jpg",
  hobbyList: ["Reading", "sleeping", "cooking"],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={dataObject}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
