import {useState} from "react"

const NoteAdder = (props) => {
    const {addNote} = props

    // const [note, setNote] = useState({
    //     title:"",
    //     description:"",
    //     person:"",
    // })

    // the right way to do it
    const [note, setNote] = useState({
        noteTitle:"",
        noteDescription:"",
        person:"",
    })

    // const handleTitleChange = (event) => {
    //     setNote({
    //         ...note,
    //         title:event.target.value
    //     })
    // }

    // const handleDescriptionChange = (event) => {
    //     setNote({
    //         ...note,
    //         description:event.target.value
    //     })
    // }

    // const handlePersonChange = (event) => {
    //     setNote({
    //         ...note,
    //         person:event.target.value
    //     })
    // }

    const handleFormChange = (event,field) => {
        const newNoteState = {
            ...note,
            [field]:event.target.value,
        }
        setNote(newNoteState)
    }

    const handleAddNewNote = () => {
       console.log(note)
        addNote(note)
    }   

    return (
        <div>
            <h1>Dodaj novi to do</h1>
            <h3>Title:</h3>
            <input type="text" value={note.title} onChange={(event) => handleFormChange(event,"noteTitle")}/>
            <h3>Description:</h3>
            <input type="text" value={note.description} onChange={(event) => handleFormChange(event,"noteDescription")}/>
            <h3>Person:</h3>
            <input type="text" value={note.person} onChange={(event) => handleFormChange(event,"person")}/>
            <button onClick={handleAddNewNote} >Dodaj</button>
            <hr></hr>
        </div>
    )
}

export default NoteAdder