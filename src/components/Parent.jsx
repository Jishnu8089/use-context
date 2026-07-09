import React from 'react'
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Parent = () => {
    const {user,setUser} = useContext(UserContext)
   
  return (
    <div>
     <h1>Parent Compenents</h1><hr />
     <div>
         { user.map((item)=>(
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
     </div>
     
      
     <hr />

    </div>
  );
}

export default Parent;
     

     

