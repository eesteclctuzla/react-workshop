
const Note = (props) => {
    const { noteTitle, noteDescription, person, id, deleteNote, readonly } = props

    return(
        <div>
            <h1>{noteTitle}</h1>
            <h2>{noteDescription}</h2>
            <h3>{person}</h3>
            {/* <button onClick={deleteNote(id)} >Izbrisi note</button> */}
            <button disabled={readonly} onClick={() => deleteNote(id)} >Izbrisi note</button>
            <hr></hr>
        </div>
    )

}

export default Note