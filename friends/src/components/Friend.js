import React from 'react';
import PropTypes from 'prop-types';

export default function Friend(props) {
  return (
    <div>
      <h3>{props.friend.name} - Age: {props.friend.age}</h3>
      <p>{props.friend.email}</p>
    </div>
  )
}

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  })
}