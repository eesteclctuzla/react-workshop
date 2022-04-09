const Note = (props) => {
const {noteTitle, noteDescription, person, id, handleDeleteNote, readonly} = props


return(
    <div>
        <h1>Title:{id + noteTitle}</h1>
        <h2>Description:</h2>
        <p>{noteDescription}</p>
        <h3>Zaduzen/a:{person}</h3>
        <button disabled={readonly} onClick={() => handleDeleteNote(id)}>Obrisi task</button>
        <hr></hr>
    </div>
)

}

export default Note