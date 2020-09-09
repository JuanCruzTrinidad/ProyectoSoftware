import React from 'react';
import productoAxios from './config/axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Auth } from './pages/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home';
import SignupPage from './pages/SignupPage';

function App() {
  const consultarAPI = () => {
    productoAxios.get('test/hello')
        .then(res => {
          console.log(res.data);
        })
        .catch(error => console.log(error));
  }

  //consultarAPI();
  //un poco de react rout, basicamente es un pinche switch. Cada route es una ruta que se genera cuando se va a ese lugar
  //realmente las url no existen en react, por lo cual se evita el problema del 404. Si vos le erras, siempre te va a llegar al home.
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
          <Route exact strict path="/Home">
            <Home />
          </Route>
          <Route exact strict path="/Login">
            <Auth />
          </Route>
          <Route exact strict path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
