import React, { Component } from 'react'
import Nav from '../Others/NavBar'
import GridEnemy from '../../components/Vistas/GridEnemy'

class Battle extends Component {

    render() {

        return (
            <div id="App">
                <Nav pageWrapId={"page-wrap"} outerContainerId={"App"} />

                <div id="page-wrap">
                    <h1 className="title-page">Battle </h1>
                </div>

                <div className="  " >
                    <GridEnemy />

                </div>




            </div>

        )
    }
}

export default Battle