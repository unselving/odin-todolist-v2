import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { useState } from 'react'
import EditTodoForm from './EditTodoForm';
import EditIcon from "./assets/icons8-edit.svg";
import DeleteIcon from "./assets/icons8-delete.svg";

function TodoItem ({todo, editTodo, allLists, removeTodo}){

const [todoInfo, setTodoInfo] = useState(todo);
const [isActive, setIsActive] = useState(false); 
const [isEdit, setIsEdit] = useState(false); 
const handleInputChange = (e) => {
    e.stopPropagation();
    const value = e.target.checked;
    const name = "isDone";
    setTodoInfo({
        ...todoInfo,
        [name]: value,
    })
    editTodo(todoInfo);
}



const toggleActive = (e) => {
    e.stopPropagation();
    setIsEdit(false);
    let currentActive = true;
    isActive ? (currentActive=false) : (currentActive=true);
    setIsActive(currentActive);
}

const toggleEdit = (e) => {
    e.stopPropagation();
    setIsActive(false);
    let currentEdit = true;
    isEdit ? (currentEdit=false) : (currentEdit=true);
    setIsEdit(currentEdit);
}

function toggleRemove(e){
    removeTodo(todo);
}

    return (
        <section>
            <div className="todoItem" onClick={toggleActive}>
                <div>
                    <input type="checkbox" name="checkbox" id={todo.id} checked={todoInfo.isDone} onClick={handleInputChange}></input>
                    {todoInfo.isDone ? (<label htmlFor="checkbox" ><s>{todo.title}</s></label>):(<label htmlFor="checkbox">{todo.title}</label>)}
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", gap:"0.3rem"}}>
                    {format(new Date(todo.dueDate),'do MMMM')}
                    <img src={EditIcon}
                     style={{ height: 15}}
                     alt="edit"
                     onClick={toggleEdit}
                     className="icon"
                     />
                     <img src={DeleteIcon}
                     style={{ height: 15}}
                     alt="delete"
                     onClick={toggleRemove}
                     className="icon"
                     />
                </div>
            </div>
            <div>
                {isActive && (
                    <div style={{padding:"1rem"}}>
                    <b>Priority: </b>
                    {todo.priority}
                    <br />
                    <b>Details: </b>
                    {todo.description}
                    </div>
                    )}
                {isEdit && (<EditTodoForm todo={todo} allLists={allLists} editTodo={editTodo} toggleEdit={toggleEdit}/>)}
            </div>
        </section>

    )
}

export default TodoItem