import React, { useState } from 'react';
import Todo from './Todo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Form = () => {
    const [field, setField] = useState("");
    const [todo, setTodo] = useState({});
    const [todos, setTodos] = useState([]);
    
    const handleChange = e => {
        setField(e.target.value);
        setTodo({[e.target.name]: e.target.value});
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
        toast.success("New item added");
    }
    
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        toast.warning("Item deleted");
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