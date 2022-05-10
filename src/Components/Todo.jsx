import React from 'react';
import { FaCheck } from 'react-icons/fa';

function Todo({ text, todo, todos, setTodos }) {

    // delete butonu için
    const deleteText = () => {
        // setTodos ile yeni liste oluştururken
        // todos içerisinde id'leri olmayan todo'ları bul
        setTodos(todos.filter((element) => element.id !== todo.id));
    }

    //complete butonu için
    const completeText = () => {
        // setTodos içerisinde todos'u map'leyerek
        // içindeki elementlerin completed özelliğini değiştir
        setTodos(todos.map((item) => {
            // Eğer item id'leri uyuşuyorsa Yani Silinmemişse
            if(item.id === todo.id) {
                // tüm todo özelliklerini aynı dön ama
                // completed özelliğinin tersini al
                return {...item, completed: !item.completed }
            }
            return item;
        }))
    }

    return (
    <div className={`${todo.completed ? 'completed' : ''} ${"list-item"}`} >
        <button onClick={completeText} className="completed-btn"><FaCheck/></button>
        <li className='list-text'>{text}</li>
        <button onClick={deleteText} className="delete-btn">X</button>
    </div>
  )
}

export default Todo;