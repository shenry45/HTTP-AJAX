import React from 'react';
import axios from 'axios';
import './App.css';

import Friend from './components/Friend';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendList: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(friends => this.setState({ 
        friendList: friends.data 
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>My Friends List</h1>
        {this.state.friendList.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    );
  }
}

export default App;
