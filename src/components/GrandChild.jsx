import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';


const GrandChild = () => {
  const {user,setUser}=useContext(UserContext)
  const{theme,toggleTheme}=useContext(ThemeContext)
  console.log(useContext(UserContext));
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <div
        style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
        padding: '20px',
        marginTop: '20px',
      }}>
      <h1>Grand child Component</h1>
      <ul>
        {user.map((item) => (
          <li key={item.id}>
            <p>User name : {item.name}</p>
            <p>User email : {item.email}</p>
          </li>
        ))}
         <button onClick={toggleTheme}>Toggle theme</button>
      </ul>
      <hr />
    </div>
  )
}




export default GrandChild;
