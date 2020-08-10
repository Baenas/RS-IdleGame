import React, { Component } from 'react'

import GetPlayerInfo from '../../services/GetPlayerInfo'

import apiClient from '../../services/apiClient'

class GridItems extends Component {
  state = {
    thisitem: []


  }
  componentDidMount() {
    apiClient.playerGetByName("Baenas").then((items => {
      let itemdata = items.data

      this.setState({ thisitem: itemdata })

    }))
  }
  render() {

    const GetStock = this.state.thisitem.filter((item, index) => item.extra !== "currency").map((item, index) => {

      return (
        <li key={index}>    <GetPlayerInfo item={item.Recurso} /> </li>
      )
    })

    const GetStockSingle = this.state.thisitem.filter((item, index) => item.Recurso === this.props.single && item.extra !== "currency").map((item, index) => {
      return (

        <span key={index} >  <GetPlayerInfo type="simple" item={item.Recurso} /></span>

      )
    })




    return (



      this.props.single === "all" ? GetStock : GetStockSingle




    )
  }
}

export default GridItems