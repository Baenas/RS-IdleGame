import React, { Component } from 'react'
import apiClient from '../../services/apiClient'

class ImageFromName extends Component {

    state = {
        name: this.props.name,
        items: [],
        image: ""
    }
    componentDidMount() {
        apiClient.itemsGetByName(this.state.name).then(items => {
            this.setState({ image: items.data.img })
        })
    }
    render() {
        return (
            <img src={this.state.image} alt={this.state.name}></img>
        )
    }

}

export default ImageFromName