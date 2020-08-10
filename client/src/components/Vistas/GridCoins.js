import React, { Component } from 'react'
import playerdata from '../../player.json'
import apiClient from '../../services/apiClient'


class GridCoins extends Component {
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



    const GetCoin = this.state.thisitem.filter((item, index) => item.extra === "currency").map((item, index) => {

      return (
        <span key={index} className=" btn-currency" >{item.Recurso} : {item.Valor}</span>
      )
    })
    return (


      <div className="site-main">

        <div className=" ">

          {GetCoin}



        </div>

      </div>

    )
  }
}

export default GridCoins