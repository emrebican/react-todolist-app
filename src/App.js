import './App.css';
import { useState, useEffect } from 'react';

import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  // input içeriğini almak için state'ler
  const [inputText, setInputText] = useState('');

  // liste oluşturmak için state'ler
  const [todos, setTodos] = useState([]);

// LİSTELEME
  // status = useState('all') varsayılan | ALL filtrelemesi
  const [status, setStatus] = useState('all');
  // filtered todos var olan liste
  // setFilteredTodos değiştirmek için kullanacağımız state
  const [filteredTodos, setFilteredTodos] = useState([]);

  //LOCALSTORAGE
  // oluşturduğumuz localstorage'ı useEffect ile
  // her refreshte bir kere çağır  
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler(todos);
    saveLocalTodos();
  }, [todos, status]) //eslint-disable-line


  // switch case ile value değerlerini kontrol edeceğiz
  const filterHandler = () => {
    // baştaki status = all
    switch (status) {
      // baştaki status değeri 'completed' ise
      case 'completed':
        // completed değeri true olanları gönder filtrele
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
        // uncompleted olanları gönder filtrele
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        // Default halinde ise listenin kendisi
        setFilteredTodos(todos);
        break;
    }
  }

    // LOCAL STORAGE SAVE
    const saveLocalTodos = () => {
      // todos (ana listemizi) local storage'a
      // todos key'i ile JSON.stringify (string hale getir) edip
      // kaydediyoruz
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
       // LOCAL STORAGE ITEM ALMA
    const getLocalTodos = () => {
  
      setTodos(JSON.parse(localStorage.getItem("todos")))
      // eğer LS boşsa
      if (localStorage.getItem("todos") === null) {
        // LS'e boş bir array aç
        localStorage.setItem("todos", JSON.stringify([]))
      } else {
        setTodos(JSON.parse(localStorage.getItem("todos")))
      }
    }
      // localStorage.setItem == storage'a    kaydet
      // localStorage.getItem == storage'tan  al
      // LS'ten item alırken
      // JSON.parse(localStorage.getItem('key'))

  return (
    <div className="App">
      {/* Form'da kullanılacakları prop olarak ata */}
      <Form 
      inputText = {inputText}
      setInputText = {setInputText}
      todos = {todos}
      setTodos = {setTodos}
      setStatus = {setStatus} />

      {/* TodoList'te kullanılacakları prop olarak ata */}
      <TodoList 
      todos = {todos}
      setTodos = {setTodos}
      filteredTodos = {filteredTodos} />
    </div>
  );
}

export default App;