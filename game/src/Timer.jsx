import React, { Component } from 'react';
import './Styles/Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 0,
      timer: 0
    }
    this.timeSince = this.timeSince.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameStarted) {
      let currentTime = Date.now();
      this.setState({startTime: currentTime})
      setInterval(this.timeSince, 1000);
    }
  }

  timeSince() {
    let { startTime } = this.state;
    const currentTime = Date.now();
    const updateTimer = Math.floor((currentTime - startTime) / 1000)
    this.setState({
      startTime: startTime,
      timer: updateTimer
    });
  }

  render() {
    return (
      <div id="timer-box">{this.state.timer}</div>
    )
  }
}


export default Timer;