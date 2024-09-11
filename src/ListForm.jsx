import {v4 as uuidv4} from 'uuid';
import { useState } from 'react'

function ListForm({addList, list}){

    const [isActive, setIsActive] = useState(false);
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
        setIsActive(false);
    };



    return (
    <section>
    {isActive ? (<form onSubmit={handleSubmit}>
        <h4>Create New List</h4>
        <label htmlFor="title">Title </label>
        <input required name="title" value={info.title} onChange={handleInputChange}></input>
        <br/><button type="submit">Add</button>
        <button type="button" onClick={() => setIsActive(false)}>Close</button>
        </form>) : (<button onClick={() => setIsActive(true)}>
                    + Add New List
                  </button>)}

    </section>

    )
}

export default ListForm;