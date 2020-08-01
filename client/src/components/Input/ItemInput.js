import React, { Component } from 'react';
import itemdata from '../../item.json'
import GetPlayerInfo from '../../services/GetPlayerInfo'

class ItemInput extends Component {

  state = {

    name: this.props.name,
    thisitem: [],
    percent: 0
  }

  componentDidMount() {


    this.setState({ thisitem: itemdata.find(item => item.name === this.state.name) })
  }

  handleClick = () => {
    if (this.state.percent <= 0) {
      this.interval = setInterval(() => {
        this.updatepercent()
      }, 700);
    }

  }

  updatepercent = () => {
    if (this.state.percent < 130) {
      this.setState({ percent: this.state.percent += this.state.thisitem.interval })

    } else if (this.state.percent >= 130) {

      this.setState({ percent: 0 })
      clearInterval(this.interval);

    }

  }
  render() {
    const { thisitem, percent } = this.state
    return (

      <div onClick={this.handleClick} >

        {thisitem.name}
        <img height="24" width="24" src={thisitem.img}></img>
        <div className="progress-bar progress-success">
          <div style={{ width: percent }}></div>
        </div>
      </div >

    )
  }
}

export default ItemInput