import React from 'react';
import productoAxios from './config/axios';

function App() {

  const consultarAPI = () => {
    productoAxios.get('test/hello')
        .then(res => {
          console.log(res.data);
        })
        .catch(error => console.log(error));
  }

  consultarAPI();
  
  return (
    <h1>Hola</h1>
  );
}

export default App;
