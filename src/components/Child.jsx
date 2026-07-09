import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Child =() => {
  const {user}=useContext(UserContext)
  return (
    <div>
      <h1>Child components</h1><hr />
      {/* <p>user : {user}</p> */}
    </div>
  );
}

export default Child;
