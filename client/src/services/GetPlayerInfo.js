import React, { Component } from 'react';
import apiClient from '../services/apiClient'

class GetCoins extends Component {

  state = {
    thisitem: []
    // gold: 0,
    // silver: 0
  }

  componentDidMount() {

    apiClient.playerGetByName("Baenas").then((items => {
      let itemdata = items.data

      this.setState({ thisitem: itemdata })

    }))

    // this.setState({ gold: playerdata.map((d) => d.gold) })
    // this.setState({ silver: playerdata.map((d) => d.silver) })


  }

  render() {
    const GetItemName = this.state.thisitem.map((item, index) => {
      return (

        <span key={index}> {this.props.item === item.Recurso ? <span>  {item.Recurso}  {item.Valor} </span> : null} </span >

      )
    })
    const GetItemNameSimple = this.state.thisitem.map((item, index) => {
      return (

        <span key={index}> {this.props.item === item.Recurso ? <span>    {item.Valor} </span> : null} </span >

      )
    })
    return (

      <span>

        {this.props.type === "simple" ? GetItemNameSimple : GetItemName}


        {/*   <span> {this.props.money === "gold" ? <span>  {this.props.item}  {this.state.gold} </span> : null} </span >
        <span> {this.props.money === "silver" ? <span>  {this.props.item}  {this.state.silver} </span> : null} </span >

        <span> {this.props.item === "Feather" ? <span>  {this.props.item}  {playerdata.map((d) => d.Feather)} </span> : null} </span >
        <span> {this.props.item === "ArrowShaft" ? <span> {this.props.item} {playerdata.map((d) => d.ArrowShaft)} </span> : null} </span > */}
      </span >


    )
  }
}

export default GetCoins


