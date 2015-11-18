import 'array.prototype.findindex';
import './main.css';

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

main();

function main() {
  
  persist(alt, storage, 'app');

  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}
