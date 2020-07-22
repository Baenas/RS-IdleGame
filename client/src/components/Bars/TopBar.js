import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

class TopBar extends Component {


    render() {

        return (
            <div className="ui  segment">
                <div className="ui  secondary menu">
                    <a href="/" className=" ui button green ">Inicio</a>

                </div>
            </div>
        )
    }

}


export default TopBar