import React, { Component } from 'react';

import Nav from '../Others/NavBar'
import GridCrafted from '../../components/Vistas/GridCrafted'

import GridCoins from '../../components/Vistas/GridCoins'
class Crating extends Component {
    render() {
        return (
            <div id="App">
                <Nav pageWrapId={"page-wrap"} outerContainerId={"App"} />

                <div id="page-wrap">
                    <h1 className="title-page">Crafting </h1>
                </div>
                <div className="center">
                    <GridCoins />
                </div>

                <div className="  " >
                    <GridCrafted />

                </div>


            </div>





        )
    }
}

export default Crating