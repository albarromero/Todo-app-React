import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
    
    const [todo, setTodo] = useState({});
    const [todos, setTodos] = useState([]);
    
    const handleChange = e => setTodo({[e.target.name]: e.target.value});

    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('The field cannot be empty');
            return;
        }
        setTodos([...todos, todo]);
    }
    
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()} autoComplete="off">
                <input type="text" name="todo" onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
            </form>
            {
              todos.map((value, index) => (
                <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
             ))
            }
        </>
    )
}

export default Form;