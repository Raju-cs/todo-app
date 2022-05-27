import React, {useState} from 'react'
import Todos from './Todos'
import Style from "../components/home.module.css"
import NewTodoFrom from './NewTodoFrom'


function Home() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo)=>{

    setTodos((oldTodos)=>{
      console.log(oldTodos);
      return [...oldTodos,{todo}]
      
    });
  console.log(todos);
  }
  return (
    <div className={Style.container}>
        <h1 style={{color:'white'}}>Todo App</h1>
        <NewTodoFrom  addTodo = {handleAddTodo}/>
      <Todos todos={todos} />
    </div>
  )
}

export default Home

