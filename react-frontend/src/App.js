import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoCard from './TodoCard';
import { Container } from '@mui/material';

import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios.get("/api/v1/todos")
    .then(res => {
      console.log(res.data)
      setTodos(res.data)
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <div>
        <h1>Amigoscode TODO App</h1>
        {todos && todos.length > 0 ? todos.map(t => {
          return <div> 
            {/* <TodoCard id={t.id} todo={t.todo} done={t.done}/> */}
            <TodoCard {...t}/>
            <br/>
          </div>
        }) : "no todos"}
      </div>
    </Container>
  )
}

export default App;
