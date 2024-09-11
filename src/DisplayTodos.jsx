import {v4 as uuidv4} from 'uuid';

function DisplayTodos({allTodos, currentList, TodoItem, editTodo, removeTodo, allLists}){


const list = allTodos.filter(obj => {
    return obj.listName===currentList
})
    return (
      <>
        {list.map((todo) => (
          <TodoItem todo={todo} editTodo={editTodo} removeTodo={removeTodo} allLists={allLists} key={todo.id}/>
        ))}
      </>
    )
  }

  export default DisplayTodos