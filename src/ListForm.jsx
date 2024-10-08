import {v4 as uuidv4} from 'uuid';
import { useState } from 'react'

function ListForm({addList, list, collapseForm}){

    const [info, setInfo] = useState(list);

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo({
            ...info,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInfo({
            ...info,
            id: uuidv4(),
        });
        addList(info); // Pass the form data to the parent component
        collapseForm();
    };



    return (
    <section>
    <form onSubmit={handleSubmit}>
        <h4>Create New List</h4>
        <label htmlFor="title">Title </label>
        <input required name="title" value={info.title} onChange={handleInputChange}></input>
        <br/><button type="submit">Add</button>
        <button type="button" onClick={() => collapseForm()}>Close</button>
        </form>

    </section>

    )
}

export default ListForm;