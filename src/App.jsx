import { useState, useEffect } from 'react'
import './App.css'
import SampleTodos from './SampleTodos';
import DisplayTodos from './DisplayTodos';
import ListofLists from './ListofLists';
import CreateNewTodoForm from './CreateNewTodoForm';
import CreateNewListForm from './CreateNewListForm';
import TodoForm from './TodoForm';
import ListForm from './ListForm';
import TodoItem from './TodoItem';
import {v4 as uuidv4} from 'uuid';


function App() {

const [allTodos, setAllTodos] = useState(()=>{
  const saved = localStorage.getItem("allTodos");
  const initialValue = JSON.parse(saved);
  return initialValue || SampleTodos;});
const [allLists, setAllLists] = useState(()=>{
  const saved = localStorage.getItem("allLists");
  const initialValue = JSON.parse(saved);
  return initialValue || [{title: "Default", id:uuidv4()},{title:"Spicy", id:uuidv4()}]})
const [currentList, setCurrentList] = useState("Default")
const [TodoForms, setTodoForms] = useState([]);
const [ListForms, setListForms] = useState([]);

useEffect(() => {
  // storing input name
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}, [allTodos]); 

useEffect(() => {
  // storing input name
  localStorage.setItem("allLists", JSON.stringify(allLists));
}, [allLists]); 



function addTodo(todo){
  setAllTodos([...allTodos, todo])
  currentList != todo.listName && setCurrentList(todo.listName)
}

function addTodoForm(){
  const blankTodo = {
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    listName: currentList,
    id: uuidv4(),
    done: false,
    }
  setTodoForms([blankTodo])
}

function addListForm(){
  const blankList = {
    title: '',
    id:uuidv4(),
    }
  setListForms([blankList])
}

function removeTodoForm(){
  setTodoForms([])
}

function removeListForm(){
  setListForms([])
}

function addList(listName){
  setAllLists([...allLists, listName])

}

function viewList(listID){
  const listName = allLists.find(x => x.id===listID)
  setCurrentList(listName.title)
}

function editTodo(todoInfo){
  const updatedTodos = allTodos.map((obj) => {return obj.id === todoInfo.id ? todoInfo : obj;});
  setAllTodos(updatedTodos);
}

function removeTodo(todoInfo){
  const id = todoInfo.id;
  const updatedTodos = allTodos.filter((todo) => todo.id !== id);
  setAllTodos(updatedTodos);
}

function removeList(listID){
  const id = listID;
  const listIndex = allLists.findIndex((x) => x.id === id) - 1;
  console.log(listIndex);
  const updatedLists = allLists.filter((list) => list.id !== id);
  currentList === (allLists.find((x) => x.id === id)).title && setCurrentList(allLists[listIndex].title);
  const updatedTodos = allTodos.filter((todo) => todo.listName !== (allLists.find((x) => x.id === id)).title);
  setAllLists(updatedLists);
  setAllTodos(updatedTodos);

}



  return (
    <>
    <div className="container">
      <div className="sidebar">
      <section id="sidebarTop">      
        <h2 onClick={() => (setCurrentList("Default"))}>Listomania</h2>
        <div><h3>Lists</h3>
        <ListofLists allLists={allLists} viewList={viewList} removeList={removeList}/>
        </div>
        <div></div>
        <CreateNewListForm addList={addList} addListForm={addListForm} ListForms={ListForms} removeListForm={removeListForm}/>
      </section>
      <section id="credit">
        <p>made by <a href="https://unselving.github.io/">unselving</a></p>
        <div><a target="_blank" href="https://icons8.com/icon/15049/edit">Edit</a> and <a target="_blank" href="https://icons8.com/icon/99933/delete">Delete</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a></div>
      </section>
      </div>
      <div className="mainSection">
      <h3>{currentList}</h3>
      <CreateNewTodoForm addTodo={addTodo} allLists={allLists} currentList={currentList} addTodoForm={addTodoForm} TodoForms={TodoForms} removeTodoForm={removeTodoForm}/>
      <DisplayTodos allTodos={allTodos} currentList={currentList} TodoItem={TodoItem} editTodo={editTodo} removeTodo={removeTodo} allLists={allLists}/>
      </div>

    </div>
    </>
    
  )
}

export default App
