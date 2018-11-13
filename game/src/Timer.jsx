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
    let startInterval;
    if (nextProps.gameStarted) {
      let currentTime = Date.now();
      this.setState({startTime: currentTime})
      startInterval = setInterval(this.timeSince, 1000);
    } else {
      console.log('here!');
      clearInterval(startInterval);;
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