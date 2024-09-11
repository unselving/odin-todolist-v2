import TodoForm from "./TodoForm";
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react'

function CreateNewTodoForm({addTodo, allLists, currentList, addTodoForm, TodoForms, removeTodoForm}){

const [isActive, setIsActive] = useState([1,0]);

function openForm(){
    setIsActive([0,1]);
    addTodoForm();
}

function collapseForm(){
    setIsActive([1,0]);
    removeTodoForm();
}

return (
    <section>
    {isActive[1]===1 && (TodoForms.map((form) => (<TodoForm key={form.id} todo={form} addTodo={addTodo} allLists={allLists} currentList={currentList} removeTodoForm={removeTodoForm} collapseForm={collapseForm} />))   
    )}
    {isActive[0]===1 && (<button onClick={()=>openForm()}>
    + Add New Task
    </button>)}
    </section>)
}

export default CreateNewTodoForm