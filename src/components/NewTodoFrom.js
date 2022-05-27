import React, { useState } from 'react'
import Style from '../components/form.module.css'




function NewTodoFrom(props) {
  const [todo , setTodo] = useState({title : '' , desc : ''});
  const {title,desc} = todo;

  const submitHandle = (event)=>{
    event.preventDefault();
    setTodo({title: "" , desc: ""});
    props.addTodo(todo);
    console.log(todo);
   }
   const handleChange = (event)=>{
     const name =event.target.name;
    setTodo((oldTodo)=>{
      console.log('oldTodoFrom:',oldTodo);
      return {...oldTodo, [name]:event.target.value}
        
     
    });
  }
  

  return <form className={Style.form} onSubmit = {submitHandle}>
      <div className={Style['form-field']}>
      <label htmlFor='title'>Title: </label>
      <input type="text" name='title' id='title' value={title} onChange ={handleChange} />
      </div>
      <div className={Style['form-field']}>
      <label htmlFor='desc'>Describtion: </label>
      <textarea type="text" name='desc' id='desc' value={desc} onChange ={handleChange}  />
      </div>
      <button type='submit'>Add Todo</button>
      
  </form>
}

export default NewTodoFrom
