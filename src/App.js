import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import ToDoList from './Components/ToDoList';
function App() { 
  const [users, setUsers] = useState([]);
  useEffect(() => { 
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response => { setUsers(response.data); }) 
     .catch(error => { console.error('Error fetching data:', error);
     }); 
    },
  []);
  return (
     <div className="App"> 
     <ToDoList/>
     <div> 
      <h2>User Names</h2>
       <ul> {
       users.map(user => (
         <li key={user.id}>{user.name}</li> 
         ))}
      </ul> 
     </div> 
    </div>
   ); 
} 
export default App;