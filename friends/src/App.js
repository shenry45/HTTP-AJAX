import React from 'react';
import axios from 'axios';
import './App.css';

import Friend from './components/Friend';
import AddFriendForm from './components/AddFriendForm';
import FindFriend from './components/FindFriendForm';

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

    // get submit parent
    const getParent = e.target.parentNode;

    // get input values
    const nameInput = getParent.querySelector('input[name="name"]').value;
    const ageInput = parseInt(getParent.querySelector('input[name="age"]').value);
    const emailInput = getParent.querySelector('input[name="email"]').value;

    // add form input values to API
    axios.post(_URL, {
      name: nameInput,
      age: ageInput,
      email: emailInput
    })
      .then( res => this.setState({
        friendList: res.data
      }))
      .catch( err => console.log(err));

    // clear input fields
    getParent
      .querySelectorAll('input')
      .forEach(input => input.value = '');
  }

  handlerDeleteFriend = friendID => {

    axios.delete(`${_URL}/${friendID}`,
      {
        params: {
          id: friendID
        }
      }
    )
      .then (res => {
        this.setState({ friendList: res.data })
      })
      .catch (err => console.log(err))
  }

  handlerFindFriend = e => {
    e.preventDefault();

    const friendID = parseInt(e.target.querySelector('input').value);

    axios.put(`${_URL}/${friendID}`,
      { id: friendID, name: "Edited" }
    )
      .then (res => {
        this.setState({ friendList: res.data });
      })
      .catch (err => console.log(err))

      e.target.querySelector('input').value = '';
  }

  render() {
    return (
      <div className="App">
        <h1>My Friends List</h1>
          <div>
            <FindFriend handlerFindFriend={this.handlerFindFriend} />
          </div>
        {this.state.friendList.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            handlerDeleteFriend={this.handlerDeleteFriend}
          />
        ))}
        <AddFriendForm
          handlerAddFriend={this.handlerAddFriend}
        />
      </div>
    );
  }
}

export default App;
