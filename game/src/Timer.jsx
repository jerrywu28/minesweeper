import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: Date.now(),
      timer: 0
    }
    this.timeSince = this.timeSince.bind(this);
  }

  componentDidMount() {
    setInterval(this.timeSince, 1000)
  }

  timeSince() {
    const { startTime } = this.state;
    const currentTime = Date.now();
    const updateTimer = Math.floor((currentTime - startTime) / 1000)
    this.setState({timer: updateTimer});
  }

  render() {
    return (
      <div>{this.state.timer}</div>
    )
  }
}


export default Timer;