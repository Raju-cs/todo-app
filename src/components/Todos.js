import React from 'react'
import Todo from './Todo';
import Style from '../components/todos.module.css'


function Todos(props) {
    console.log(props.todos);
  return <section className={Style.todos}>
     {
         props.todos.map((todo) => <Todo todo={todo.todo} key={todo.id} />)
     }
  </section>
}

export default Todos
