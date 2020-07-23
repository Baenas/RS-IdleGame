import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import General from './components/Vistas/General.js'
import PedirAccion from './components/Formularios/PedirAccion.js'
import ResultadoRecuento from './components//Formularios/ResultadoRecuento.js'
import Tabla1 from './components/test/Tabla1.js'

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router>
              <div>
                <Route exact path="/" component={General} />
                <Route exact path="/peticion/:destino" component={PedirAccion} />
                <Route exact path="/test/tablas" component={Tabla1} />
                <Route exact path="/recuento" component={ResultadoRecuento} />



              </div>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App;