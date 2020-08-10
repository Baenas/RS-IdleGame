import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import General from './components/Vistas/General.js'
import Crating from './components/Pages/Crafting'

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




              </div>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App;