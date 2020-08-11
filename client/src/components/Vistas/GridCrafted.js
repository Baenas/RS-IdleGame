import React, { Component } from 'react'
import apiClient from '../../services/apiClient'
import CraftInput from '../Input/CraftInput'
class GridCrafted extends Component {
    state = {
        thisitem: []

    }
    componentDidMount() {

        apiClient.itemsGet().then((items => {
            let itemdata = items.data

            this.setState({ thisitem: itemdata })

        }))
        this.lock = false

    }
    render() {
        const GetItemName = this.state.thisitem.filter((item, index) => item.type === "crafted").map((item, index) => {

            return (
                <div key={index} className="" >
                    <CraftInput name={item.name} />
                </div>
            )
        })
        return (


            <div className="content-input">

                {GetItemName}



            </div>

        )
    }
}

export default GridCrafted