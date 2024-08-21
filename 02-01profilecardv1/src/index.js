import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <h1>Hello</h1>
      </div>
    </div>
  )
}

function Avatar(){
  return (
    <div>
      <img src="images/Avatar.png" className='image'></img>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

