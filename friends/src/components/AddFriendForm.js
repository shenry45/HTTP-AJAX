import React from 'react';
import styled from 'styled-components';

export default function AddFriendForm(props) {
  return (
    <Form onSubmit={props.handlerAddFriend}>
      <h2>Add a Friend Here!</h2>
      <label>Name</label>
      <Input type="text" name="name" maxLength="25"></Input>
      <label>Age</label>
      <Input type="number" name="age" maxLength="3"></Input>
      <label>Email Address</label>
      <Input type="email" name="email" maxLength="30"></Input>
      <button type="submit" onClick={props.handlerAddFriend}>Add Friend</button>
    </Form>
  )
}

const Form = styled.form`
  display: block;
  background: grey;
  padding: 10px 0 30px;

  h2 {
    color: #fff;
  }
  label {
    color: lightgrey
  }
`;

const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
`;