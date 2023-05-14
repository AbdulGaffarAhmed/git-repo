import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  const [query,setQuery] = useState('');
  fetch('https://api.github.com/users')
  .then((res)=>res.json())
  .then((json)=>setData(json));
  return (
    <div>App
      <input type='text' placeholder='search' onChange={(e)=>setQuery(e.target.value)}/>
    {/* {JSON.stringify(data)}; */}
    {data.filter((user)=>user.login.toLowerCase().includes(query)).map((item) => 
      <tr><td>{item.login}</td></tr>
    )}
    <h1>Hello World</h1>
    <h2>Abdul Gaffar ahmed </h2>
    </div>

  )
}

export default App