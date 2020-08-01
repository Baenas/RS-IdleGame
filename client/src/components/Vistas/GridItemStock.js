import React, { Component } from 'react'

import GetPlayerInfo from '../../services/GetPlayerInfo'

import itemdata from '../../item.json'
import playerdata from '../../player.json'

class GridItems extends Component {
  state = {


  }
  render() {
    const GetStock = playerdata[0].items.map((item, index) => {
      console.log(playerdata)
      return (

        <li key={index}>    <GetPlayerInfo item={item.name} /> </li>

      )



    })
    return (


      <div className=" site-footer cell-8" >

        <div className=" grid">
          <ul >
            {GetStock}

          </ul>

        </div>

      </div>

    )
  }
}

export default GridItems