import React from 'react';
import styled from 'styled-components';

export default function FindFriend(props) {
  return (
    <FindFriendFormTag onSubmit={props.handlerFindFriend}>
      <label>Change Friend Name by ID  </label>
      <input type="number" maxLength="2"></input>
    </FindFriendFormTag>
  )
}

const FindFriendFormTag = styled.form`
  margin: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #000;

  label {
    margin-right: 10px;
  }
`;