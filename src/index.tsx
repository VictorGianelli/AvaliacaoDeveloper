import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      vehicles: [
        {
          id: 1,
          name: "Victor",
          locked: true,
          vehiclePlate: "CTK2100",
          renavan: "53726152-43",
        },
        {
          id: 2,
          name: "Jhon Doe",
          locked: false,
          vehiclePlate: "DKF7887",
          renavan: "26152537-43",
        },
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/vehicles', () => {
      return this.schema.all('vehicles')
    })

    this.post('/vehicles', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('vehicle', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);