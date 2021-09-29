import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

// createServer({
//   routes() {
//     this.namespace = 'api';

//     this.get('/vehicles', () => {
//       return [
//         {
//           id: 1,
//           locked: true,
//           vehiclePlate: 'CTK2100',
//           renavan: '53726152-43',
//         },
//         {
//           id: 2,
//           locked: false,
//           vehiclePlate: 'DKF7878',
//           renavan: '26152537-83',
//         },
//       ]
//     })
//   }
// })


createServer({
  models: {
    vehicle: Model
  },

  seeds(server) {
    server.db.loadData({
      vehicles: [
        {
          id: 1,
          plate: 'CTK2100',
          renavan: '53726152-43',
          name: 'John Doe',
          cpf: 434324331
        },
        {
          id: 2,
          plate: 'DKF7878',
          renavan: '26152537-83',
          name: 'John Doe2',
          cpf: 243314343
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/vehicles', () => {
      return this.schema.all('vehicle')
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