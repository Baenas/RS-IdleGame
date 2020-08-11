import React, { Component } from 'react'
import apiClient from '../../services/apiClient'
import ImageFromName from '../scripts/ImageFromName'
class Inventory extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        apiClient.playerGetByName("Baenas").then(data => {

            this.setState({ items: data.data })

        })
    }


    render() {
        const { items } = this.state

        let itemlist = items.filter(item => item.extra !== "currency").map((item, index) => {
            return (

                <div className="item-input" onClick={this.handleClick} >

                    {item.Recurso}
                    <ImageFromName name={item.Recurso} />
                    {item.Valor}

                    {/* <div className="progress-bar" role="progressbar" style={{ width: percent }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> */}
                    {/* <div className="progress-bar progress-success">
          <div style={{ width: percent + "%" }}></div>
        </div> */}
                </div >
            )
        })
        return (

            <div className="content-input">
                {itemlist}
            </div>
        )
    }
}

export default Inventory