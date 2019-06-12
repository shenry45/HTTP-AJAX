import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Friend(props) {

  const handlerGetID = e => {
    e.preventDefault();

    return props.handlerDeleteFriend(props.friend.id)
  }

  return (
    <FriendDiv>
      <FriendDelete>
        <button onClick={handlerGetID}>x</button>
      </FriendDelete>
      <div>
        <h3>{props.friend.name} - Age: {props.friend.age}</h3>
        <p>{props.friend.email}</p>
      </div>
    </FriendDiv>
  )
}

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  })
}

const FriendDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const FriendDelete = styled.div`
  margin-right: 30px;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 50%;
  background-color: #fff;

  p {
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.2rem;
    position: relative;
    top: -5px;

  }
  
  &:hover {
    color: #f00;
  }
`;