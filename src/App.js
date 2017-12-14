import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import { Progress, Button, Title } from 'reactbulma'


class App extends Component {
  state = {
    viewed: 0,
    maxViewed: 10,
    gambled: false
  }

  incrementViewed = () => {
    this.setState(prevState => ({
      viewed: prevState.viewed + 1
    }))
  }

  toggleGamble = () => {
    const randNum = Math.floor(Math.random() * 20)
    this.setState(prevState => ({
      gambled: !prevState.gambled,
      maxViewed: prevState.maxViewed + randNum
    }))
  }

  render() {
    const { viewed, maxViewed } = this.state;
    return (
      <div className="App">
        <Progress warning large value={viewed} max={maxViewed}></Progress>
        { (!this.state.gambled && this.state.viewed < 3) ? <Button warning onClick={this.toggleGamble}>Gamble</Button> : ''}
        <hr/>
        <Title is="3">You can view {viewed}/{maxViewed} profiles.</Title>
        <Profile 
        viewed={viewed}
        maxViewed={maxViewed}
        incrementViewed={this.incrementViewed}/>
      </div>
    );
  }
}

export default App;
