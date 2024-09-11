import ListForm from './ListForm';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react'

function CreateNewListForm({addList, addListForm, ListForms, removeListForm}){

const [isActive, setIsActive] = useState([1,0]);

function openForm(){
    addListForm();
    setIsActive([0,1]);

}

function collapseForm(){
    removeListForm();
    setIsActive([1,0]);

}

return (
    <section>
    {isActive[1]===1 && (ListForms.map((form) => (<ListForm key={form.id} list={form} addList={addList} removeListForm={removeListForm} collapseForm={collapseForm} />))   
    )}
    {isActive[0]===1 && (<button onClick={()=>openForm()}>
    + Add New List
    </button>)}
    </section>)
}

export default CreateNewListForm