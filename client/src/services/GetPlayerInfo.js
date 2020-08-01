import React, { Component } from 'react';
import playerdata from '../player.json'

import itemdata from '../item.json'
class GetCoins extends Component {

  state = {
    data: playerdata[0].items,
    gold: 0,
    silver: 0
  }

  componentDidMount() {


    this.setState({ gold: playerdata.map((d) => d.gold) })
    this.setState({ silver: playerdata.map((d) => d.silver) })


  }

  render() {
    const GetItemName = this.state.data.map((item, index) => {
      return (

        <span key={index}> {this.props.item === item.name ? <span>  {item.name}  {item.own} </span> : null} </span >

      )
    })
    return (

      <span>

        {GetItemName}

        {/*   <span> {this.props.money === "gold" ? <span>  {this.props.item}  {this.state.gold} </span> : null} </span >
        <span> {this.props.money === "silver" ? <span>  {this.props.item}  {this.state.silver} </span> : null} </span >

        <span> {this.props.item === "Feather" ? <span>  {this.props.item}  {playerdata.map((d) => d.Feather)} </span> : null} </span >
        <span> {this.props.item === "ArrowShaft" ? <span> {this.props.item} {playerdata.map((d) => d.ArrowShaft)} </span> : null} </span > */}
      </span >


    )
  }
}

export default GetCoins


