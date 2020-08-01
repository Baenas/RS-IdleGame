import React, { Component } from 'react';
import ItemInput from '../Input/ItemInput'
import GetPlayerInfo from '../../services/GetPlayerInfo'
import GridItems from './GridItems'
import GridCoins from './GridCoins'

import GridItemStock from './GridItemStock'

class General extends Component {
  render() {
    return (
      <div className="grid">
        <div className="cell-4">
          <div>

          </div>
          <div className=" site-main ">

            <GridCoins />
          </div>


          <GridItemStock />
        </div>
        <GridItems />


      </div>


    )
  }
}

export default General