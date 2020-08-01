import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import General from './components/Vistas/General.js'


class App extends Component {
  render() {
    return (
      <div className="">
        <div className="container">
          <div className="">
            <Router>
              <div>
                <Route exact path="/" component={General} />




              </div>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App;