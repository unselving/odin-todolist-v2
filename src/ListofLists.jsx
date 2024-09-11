import DeleteIcon from "./assets/icons8-delete.svg";
function ListofLists({allLists, viewList, removeList}){

  function handleGetId(e) {
    const listID = e.target.id;
    viewList(listID)
  }

  function toggleRemove(e) {
    e.stopPropagation();
    const listID = e.target.parentElement.id;
    removeList(listID)
  }



    return(
      <ul>
        {allLists.map((list, i) => (
          <li key={list.id} id={list.id} onClick={handleGetId} className="listTitle" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            {list.title}
            <img src={DeleteIcon}
            className="deleteListIcon"
                     style={{ height: 15}}
                     alt="delete"
                     onClick={toggleRemove}

                     
                     />
          </li>
        ))}
      </ul>
    )
}

export default ListofLists