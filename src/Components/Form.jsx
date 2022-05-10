import React, { useState } from 'react';

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {

    // alert için state oluşturuyoruz
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    // input'a yazılan değeri tutmak için
    const onChangeInput = (e) => {
        setInputText(e.target.value);
    }

    // input'a yazılanı alma kuralları
    const onSubmitHandler = (e) => {
        // yenilemeyi engelle
        e.preventDefault();

        const isEmpty = str => !str.trim().length;
        // inputText boşsa
        if(isEmpty(inputText)) {
            // setalert === Warning
            setAlertWarning(true);
            setTimeout(() => {
                // hata mesajı 1s sonra kaybolsun
                setAlertWarning(false);
            }, 2000);
        } else {
            setAlertSuccess(true);
            setTimeout(() => {
                // success mesajı 1s sonra kaybolsun
                setAlertSuccess(false);
            }, 2000);

            // liste oluşturma
            // todos: elimizdeki liste
            // setTodos: oluşacak liste
            setTodos([...todos,
            // silme ve check işlemleri için gerekli değerleri ata
            {text: inputText, completed: false, id: Math.random()}
            ])
        }

        // ekledikten sonra input'u temizle
        setInputText('');
    }

    // status butonlarımıza işlev atıyoruz
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

     return (

      <div>
        <h1 className='title'>todos</h1>
        <form onSubmit={onSubmitHandler}>
                <input 
                value={inputText} 
                onChange={onChangeInput}
                className="input" />
        </form>
        
        <h4 className='counter'>{todos.length}</h4>

        <div name="todos" onClick={statusHandler} className="statusButton">
            <button value="all">all</button>
            <button value="completed">completed</button>
            <button value="uncompleted">uncompleted</button>
        </div>  

        <div className='alert-wrapper'>
            {/* WARNING */}
            {alertWarning ? <div className='alert-warning'>
                    <div>Input alanı boş!</div>
                </div> : ""}
                {/* SUCCESS */}
            {alertSuccess ? <div className='alert-success'>
                <div>Kayıt Başarılı</div>
            </div> : ""}  
        </div>
    </div>
  )
}

export default Form;