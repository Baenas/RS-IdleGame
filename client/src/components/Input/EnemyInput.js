import React, { Component } from 'react'
import apiClient from '../../services/apiClient'
import { Line, Circle } from 'rc-progress';

class EnemyInput extends Component {
    state = {

        name: this.props.name,
        thisitem: [],
        percent: 100,
        interv: 0
    }
    componentDidMount() {

        apiClient.enemyGetByName(this.state.name).then((items => {
            let itemdata = items.data

            this.setState({ thisitem: itemdata })
            this.setState({
                interv: this.state.thisitem.interval
            })
        }))


        this.lock = false

    }
    handleClick = () => {

        this.setState({ percent: this.state.percent - 10 })



    }
    updatepercent = () => {
        this.lock = true;

        if (this.state.percent < 100 && this.lock === true) {
            this.setState({ percent: this.state.percent - 10 })

        } else if (this.state.percent >= 100) {


            // const find = playerdata[0].items.find(item => item.name === this.state.name)
            // find.own++

            this.lock = false;
            this.setState({ percent: 0 })
            clearInterval(this.interval);

        }

    }

    render() {
        const { thisitem, percent } = this.state

        return (
            <div className="item-input" onClick={this.handleClick} >

                {thisitem.name}<img width="100px" alt="" src={thisitem.img} />

                <Line percent={percent} strokeWidth="4" strokeColor="red" />
                {/* <div className="progress-bar" role="progressbar" style={{ width: percent }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> */}
                {/* <div className="progress-bar progress-success">
          <div style={{ width: percent + "%" }}></div>
        </div> */}
            </div >
        )
    }
}

export default EnemyInput