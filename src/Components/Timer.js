import React from 'react';
import './Style.css';

const formattedSeconds = (sec) => Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2)
const Button = (props) => <button type="button" {...props} className={"btn " + props.className} />;


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      seconds: 0,
      frequency: 0,
      
    };
    this.interval = null;
  }

  handleStartClick() {
    this.setState({ running: true });
    this.interval = setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
  }

  handleStopClick() {
    clearInterval(this.interval);
    this.setState({ running: false });
    
    this.setState({ seconds: 0 });
  }

 

  

  render() {
    const {running, seconds} = this.state;

    return (
      <div className="stopwatchs">
        <h1 className="stopwatch-timer1">{formattedSeconds(seconds)}</h1>

        {(running
          ? <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</Button>
          : <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>
        )}

      
        
      </div>
    );
  }
}

export default Timer