import React from 'react'
import Counter from './feacture/counter/Counter'
import Zero from './feacture/counter/Zero'
import Todos from './feacture/Todo/Todos'
import AddTodo from './feacture/Todo/AddTodo'

function App() {
  return (
    <div>
      <h1>Hello this app</h1>
      {/* <Counter /> */}
      {/* <Zero /> */}

      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
