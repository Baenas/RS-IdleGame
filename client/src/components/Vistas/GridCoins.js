import React, { Component } from 'react'
import playerdata from '../../player.json'


class GridCoins extends Component {
  state = {


  }
  render() {
    const GetItemName = playerdata[0].coins.map((item, index) => {

      return (
        <span key={index} className=" btn btn-warning" >{item.name} : {item.own}</span>
      )
    })
    return (


      <div className=" site-footer cell-8">

        <div className=" grid">

          {GetItemName}



        </div>

      </div>

    )
  }
}

export default GridCoins