import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './App.css';

import Friend from './components/Friend';
import AddFriendForm from './components/AddFriendForm';

const _URL = 'http://localhost:5000/friends';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendList: []
    }
  }

  componentDidMount() {
    axios.get(_URL)
      .then(friends => this.setState({ 
        friendList: friends.data 
      }))
      .catch(err => console.log(err))
  }

  handlerAddFriend = e => {
    e.preventDefault();

    const getParent = e.target.parentNode;
    const getInputs = getParent.querySelectorAll('input');
    axios.post(_URL)

    // clear input fields
    getInputs.forEach(input => input.value = '');
  }

  render() {
    return (
      <div className="App">
        <h1>My Friends List</h1>
        {this.state.friendList.map(friend => (
          <Friend friend={friend} />
        ))}
        <AddFriendForm handlerAddFriend={this.handlerAddFriend} />
      </div>
    );
  }
}

export default App;
