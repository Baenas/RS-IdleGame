import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import General from './components/Vistas/General.js'
import Crating from './components/Pages/Crafting'
import Battle from './components/Pages/Battle'


class App extends Component {
  render() {
    return (
      <div className="">
        <div className="container">
          <div className="">
            <Router>
              <div>
                <Route exact path="/" component={General} />
                <Route exact path="/craft" component={Crating} />
                <Route exact path="/battle" component={Battle} />




              </div>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App;