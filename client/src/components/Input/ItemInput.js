import React, { Component } from 'react';
import itemdata from '../../item.json'
import GetPlayerInfo from '../../services/GetPlayerInfo'

class ItemInput extends Component {

  state = {

    name: this.props.name,
    thisitem: []
  }

  componentDidMount() {


    this.setState({ thisitem: itemdata.find(item => item.name === this.state.name) })
  }
  render() {
    const { thisitem, name } = this.state
    return (

      <div className="">

        {thisitem.name}
        <img height="24" width="24" src={thisitem.img}></img>
      </div >

    )
  }
}

export default ItemInput