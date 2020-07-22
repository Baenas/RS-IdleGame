import React, { Component } from 'react';
import TopBar from '../Bars/TopBar'
class General extends Component {

    render() {
        return (
            <div>

                <div class="ui form message">
                    <div class="fields">
                        <div class="field">

                            <a href="/" className=" ui button green ">Inicio</a>

                        </div>
                        <div class="field">
                            <h2 className="field"> <i className="ui button  large  grey">username</i></h2>

                        </div>

                        <div class="field">

                            <h2 className="field">Alertas :  <i>0</i> </h2>

                        </div>
                    </div>
                </div>

                <div className="container ui ">


                    <h2 class="ui header">

                        <div class="content">
                            Lista de acciones
    <div class="sub header">Selecciona el tipo de solicitud que necesitas </div>
                        </div>
                    </h2>
                    <a href="/peticion"> <button class="ui  button brown">Peticion Almacen</button> </a>
                    <a href="/peticion"><button class="ui  button blue">Peticion Mecanico</button> </a>
                </div>





            </div>
        )
    }

}


export default General