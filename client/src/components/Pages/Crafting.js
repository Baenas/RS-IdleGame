import React, { Component } from 'react';

import Nav from '../Others/NavBar'
import GridItems from '../../components/Vistas/GridItems'

import GridCoins from '../../components/Vistas/GridCoins'
import GridItemStock from '../../components/Vistas/GridItemStock'
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
                    <GridItems />

                </div>


            </div>





        )
    }
}

export default Crating