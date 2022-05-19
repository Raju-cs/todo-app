import React from 'react'
import Todo from './Todo';


function Todos(props) {
    console.log(props.todo);
  return <section>
     {
         props.todo.map((todo) => <Todo todo={todo} key={todo.id} />)
     }
  </section>
}

export default Todos
