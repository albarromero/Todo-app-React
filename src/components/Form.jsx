import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
    const [field, setField] = useState("");
    const [todo, setTodo] = useState({});
    const [todos, setTodos] = useState([]);
    
    const handleChange = e => {
        setField(e.target.value);
        setTodo({[e.target.name]: field});
    }

    const handleSubmit = e => {
        e.preventDefault();
        setField("");
    }

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
            <form onSubmit={handleSubmit} autoComplete="off">
                <input type="text" name="todo" value={field} onChange={handleChange}/>
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