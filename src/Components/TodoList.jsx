import React from 'react';
import Todo from './Todo';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaSkull } from 'react-icons/fa';

function TodoList({ todos, setTodos, filteredTodos }) {

  const [clickHandler, setClickHandler] = useState(true);

  // All Completed Butonu için Fonksiyon
  const allCompletedHandler = () => {
    setTodos(
      todos.map((item) => {
        return {...item, completed: clickHandler}
      })
    );
    setClickHandler(!clickHandler);
  }

  const allCompletedDelete = () => {
    setTodos(todos.filter((element) => element.completed === false));
  }

  return (
    <div>
        <ul className='list'>
          <button onClick={allCompletedDelete} className="deleteCheck-btn"><FaSkull/></button>
          <button onClick={allCompletedHandler} className="allCompleted-btn"> <FaCheck />
           </button>
            {
              filteredTodos.map((todo) => (
                  <Todo 
                  text = {todo.text}
                  key = {todo.id}
                  todo = {todo}
                  todos = {todos}
                  setTodos = {setTodos} />
              ))
            }
        </ul>        
    </div>
  )
}

export default TodoList;