import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/vehicles', () => {
      return [
        {
          id: 1,
          name: "Victor",
          locked: true,
          vehiclePlate: "CTK2100",
          renavan: "53726152-43",
          // images: [],
          // blocked: false
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);