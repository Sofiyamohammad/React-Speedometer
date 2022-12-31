import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  ApplyBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  Accelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            className="accelerate-button"
            onClick={this.Accelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="applybrake-button"
            onClick={this.ApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
