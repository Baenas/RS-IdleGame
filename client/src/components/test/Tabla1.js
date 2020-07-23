import React, { Component } from 'react';

class Tabla1 extends Component {

    render() {
        return (
            <div>

                <a href="/" className=" ui  mini button green ">Inicio</a>

                <h2>Tabla de Muestra 1</h2>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>SALA</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                            <th>Informacion</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>PH3</b></td>
                            <td><h4 className="ui brown header">Recuento</h4></td>
                            <td class="active"> <i class="icon checkmark"></i> Enviado</td>
                            <td><a href="/recuento" > informacion </a></td>
                        </tr>
                        <tr>
                            <td><b>S3</b></td>
                            <td><h4 className="ui brown header">Recuento</h4></td>
                            <td class="warning"> <i class="attention icon"></i> Aceptado</td>
                            <td><a href="/recuento" >  informacion </a></td>
                        </tr>
                        <tr>
                            <td><b>L1</b></td>
                            <td><h4 className="ui brown header">Recuento</h4></td>
                            <td class="positive"> <i class="icon checkmark"></i> Terminado</td>
                            <td><a href="/recuento" >  informacion </a></td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <h2>Tabla de Muestra 2</h2>

                <table class="ui selectable inverted table">
                    <thead>
                        <tr>
                            <th className="ui header blue">SALA</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                            <th>Informacion</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>PH3 - 20P1849</b></td>
                            <td><h4 className="ui brown header">Recuento</h4></td>
                            <td ><h4 className="ui header blue"> Enviado</h4></td>
                            <td><a href="/recuento" > informacion </a></td>
                        </tr>
                        <tr>
                            <td><b>S3 - 20P1688</b></td>
                            <td><h4 className="ui brown header">Recuento</h4></td>
                            <td ><h4 className="ui header yellow"> Aceptado</h4></td>
                            <td><a href="/recuento" >  informacion </a></td>
                        </tr>
                        <tr>
                            <td><b>L1  - 20P2034</b></td>
                            <td><h4 className="ui brown header">Recuento</h4></td>
                            <td > <h4 className="ui header green"> <i class="icon checkmark"></i> Terminado</h4></td>

                            <td><a href="/recuento" >  informacion </a></td>
                        </tr>
                    </tbody>
                </table>
                <br></br>

            </div >
        )
    }

}


export default Tabla1