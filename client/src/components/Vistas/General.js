import React, { Component } from 'react';
import ItemInput from '../Input/ItemInput'
import GetPlayerInfo from '../../services/GetPlayerInfo'

class General extends Component {
  render() {
    return (
      <div className="grid">
        <div className="cell-4">
          <div>

          </div>
          <div className=" site-main ">
            <span className=" btn btn-warning" >GOLD : <GetPlayerInfo money="gold" /></span>
            <span className=" btn btn-info" >SILVER  :  <GetPlayerInfo money="silver" /> </span>

          </div>

          <GetPlayerInfo item="Feather" />

        </div>
        <div className=" site-footer cell-8">

          <div className=" grid">

            <div className=" cell-3 btn btn-default btn-ghost">
              <ItemInput name="Feather" />
            </div>
            <div className="cell-3 btn btn-default btn-ghost">
              <ItemInput name="ArrowShaft" />
            </div>

          </div>

        </div>
      </div>


    )
  }
}

export default General