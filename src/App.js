import React from 'react';
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Inicio/Index';
import SobreMi from './Components/SobreMi/SobreMi';
import Proyectos from './Components/Proyectos/Proyectos';
import Contacto from './Components/Contacto/Contacto'

function App() {
  return (
    <>

      <CssBaseline />
      <Navbar />
      <Route path="/sobre-mi" component={SobreMi} />
      <Route path="/proyectos" component={Proyectos} />
      <Route path="/contacto" component={Contacto} />
      <Route exact path="/" component={Index} />
    </>
  );
}

export default App;
