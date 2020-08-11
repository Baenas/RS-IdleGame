import React, { Component } from 'react';
import Nav from '../Others/NavBar'
import Inventory from '../Pages/Inventory'
class General extends Component {
  render() {
    return (
      <div id="App">
        <Nav pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id="page-wrap">
          <h1 className="title-page">Runescape IDLE Game </h1>
        </div>
        <Inventory />

      </div>





    )
  }
}

export default General