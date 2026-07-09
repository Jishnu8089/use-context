import React from 'react'
import GrandChild from '../components/GrandChild';
import Child from '../components/Child';
import Parent from '../components/Parent';

const Home =() =>{
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Home Page</h1>
        <Parent />
        <Child />
        <GrandChild />
      
    </div>
  )
}

export default Home;
