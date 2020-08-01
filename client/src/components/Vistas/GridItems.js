import React, { Component } from 'react'
import ItemInput from '../Input/ItemInput'

import itemdata from '../../item.json'

class GridItems extends Component {
  state = {


  }
  render() {
    const GetItemName = itemdata.map((item, index) => {

      return (
        <div key={index} className=" cell-3 btn btn-default btn-ghost">
          <ItemInput name={item.name} />
        </div>
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

export default GridItems