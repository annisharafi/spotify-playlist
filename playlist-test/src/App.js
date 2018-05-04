import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Aggregate extends Component {
  render() {
    return (<div style={{
        width: '40%',
        display: 'inline-block'
      }}>
      <h2>Number text</h2>
    </div>);
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
      <img/>
      <input type="text"/>
      search
    </div>
  );
  }
}
class Playlist extends Component{
  render(){
    return (
    <div style={{width:"25%", display:"inline-block"}}>
    <h3>Playlist</h3>
    <ul>
      <li>song1</li>
      <li>song2</li>
      <li>song3</li>
    </ul>
    </div>
  );
  }
}

class App extends Component {
  render() {
    let name = 'David'
    let greed = '#ffffff'
    let style = {
      color: greed,
      'font-size': '24px'
    }
    return (
      <div className="App">
      <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
  );
  }
}

export default App;
