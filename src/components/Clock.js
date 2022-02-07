import React from 'react';

export default class Clock extends React.Component {
    state = {
        date : new Date()
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }  
    tick() {
        this.setState({
          date: new Date()
        });
    }
    render() {
         return (
            <Time date={this.state.date} />
        )
    }
  }

  function Time(props) {
    return (
        <div id="top" className="clock">
            <h2>{props.date.toLocaleTimeString()}</h2>
            <h1 className='cursive'>TODO LIST</h1>
            <h2>{props.date.toDateString()}</h2>
        </div>
    )
  }
  