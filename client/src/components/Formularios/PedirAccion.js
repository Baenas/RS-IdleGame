import React, { Component } from 'react';
import Almacen from '../Formularios/Almacen.js'
import Mantenimiento from '../Formularios/Mantenimiento.js'

class PedirAccion extends Component {
    state = {
        destino: this.props.match.params.destino
    }
    render() {
        return (
            <div>


                <div class="ui form message">
                    <div class="fields">
                        <div class="field">

                            <a href="/" className=" ui  mini button green ">Inicio</a>

                        </div>

                    </div>
                </div>

                <div className="container ui ">

                    {this.state.destino === "almacen" ? <Almacen /> : <Mantenimiento />}
                </div>




            </div>
        )
    }

}


export default PedirAccion