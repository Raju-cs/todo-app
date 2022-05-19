import React from 'react'
import Todos from './Todos'
const dammyTodo = [
    {
        id:1 ,
        title : "Todo title 1",
        desc : "Toodo Describtion 1 is here"
    },
    {
        id:2,
        title : "Todo title 2",
        desc : "Toodo Describtion 2 is here"
    }
]
function Home() {
  return (
    <div>
      <Todos todo={dammyTodo} />
    </div>
  )
}

export default Home

