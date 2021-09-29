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
    vehicles: Model
  },

  seeds(server) {
    server.db.loadData({
      vehicles: [
        {
          id: 1,
          locked: true,
          vehiclePlate: 'CTK2100',
          renavan: '53726152-43',
        },
        {
          id: 2,
          locked: false,
          vehiclePlate: 'DKF7878',
          renavan: '26152537-83',
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

      return schema.create('vehicles', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);