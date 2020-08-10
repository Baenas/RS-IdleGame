import React, { Component } from 'react'
import EnemyInput from '../Input/EnemyInput'
import apiClient from '../../services/apiClient'


class GridItems extends Component {
  state = {
    thisitem: []

  }

  componentDidMount() {

    apiClient.enemyGet().then((items => {
      let itemdata = items.data

      this.setState({ thisitem: itemdata })

    }))
    this.lock = false

  }

  render() {
    const GetItemName = this.state.thisitem.map((item, index) => {

      return (
        <div key={index} className="" >
          <EnemyInput name={item.name} />
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