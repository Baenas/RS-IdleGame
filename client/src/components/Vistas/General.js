import React, { Component } from 'react';
import TopBar from '../Bars/TopBar'
class General extends Component {

    render() {
        return (
            <div>


                <TopBar />


                <div class="ui form message">
                    <div class="fields">
                        <div class="field">
                            <h2 className="field">Hola :  <i className="ui button  large  grey">username</i></h2>

                        </div>
                        <div class="field">

                        </div>
                        <div class="field">

                            <h2 className="field">Alertas :  <i>0</i> </h2>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}


export default General