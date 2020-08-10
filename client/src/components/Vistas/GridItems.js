import React, { Component } from 'react'
import ItemInput from '../Input/ItemInput'
import apiClient from '../../services/apiClient'


class GridItems extends Component {
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
    const GetItemName = this.state.thisitem.map((item, index) => {

      return (
        <div key={index} className="" >
          <ItemInput name={item.name} />
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

export default GridItems