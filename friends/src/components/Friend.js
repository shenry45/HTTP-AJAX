import React from 'react';
import PropTypes from 'prop-types';

export default function Friend(props) {
  return (
    <div>
      <h3>{props.friend.name}</h3>
      <p>{props.friend.email}</p>
      <quote>{props.friend.age}</quote>
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