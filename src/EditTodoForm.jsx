import {v4 as uuidv4} from 'uuid';
import { useState } from 'react'

function EditTodoForm({todo, allLists, editTodo, toggleEdit}){

    const [todoInfo, setTodoInfo] = useState(todo);

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTodoInfo({
            ...todoInfo,
            [name]: value,
        });

        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = todo.id;
        editTodo(todoInfo); // Pass the form data to the parent component
        setTodoInfo(todo)
        toggleEdit();
    };



    return (
    <section style={{padding:"1rem"}}>
    <form onSubmit={handleSubmit} className="TodoForm">
            <h4>Create New Todo</h4>
            <label htmlFor="title">Title </label>
            <input required name="title" value={todoInfo.title} onChange={handleInputChange}></input>
            <label htmlFor="description">Description</label>
            <input name="description" value={todoInfo.description} onChange={handleInputChange}></input>
            <br/><label htmlFor="dueDate">Due Date </label>
            <input required type="date" name="dueDate" value={todoInfo.dueDate} onChange={handleInputChange}></input>
            <label htmlFor="priority">Priority </label>
            <input type="radio" name="priority" value="Low" id="Low" checked={"Low"===todoInfo.priority} onChange={handleInputChange}></input>
            <label htmlFor="Low">Low </label>
            <input type="radio" name="priority" value="Medium" id="Medium" checked={"Medium"===todoInfo.priority} onChange={handleInputChange}></input>
            <label htmlFor="Medium">Medium </label>
            <input type="radio" name="priority" value="High" id="High" checked={"High"===todoInfo.priority} onChange={handleInputChange}></input>
            <label htmlFor="High">High </label>
            <br/><label htmlFor="listName">List Name </label>
            <select required name="listName" onChange={handleInputChange} defaultValue={todoInfo.listName}>
            {allLists.map((list) => (<option value={list.title} key={list.id}>{list.title}</option>))}
            </select>
            <button type="submit">Save</button>
            <button type="button" onClick={toggleEdit}>Close</button>
        </form>
    </section>

)

}

export default EditTodoForm;