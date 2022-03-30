import {useState} from 'react'

const NoteAdder = (props) => {
    const {addNewNote} = props
    const [note, setNote] = useState({
        noteDescription:"",
        noteTitle:"",
        person:"",
    })

    const handleFormChange = (event, field) => {
        const temp = {...note, [field]: event.target.value}
        setNote(temp)
    }

    return(
        <div>
            <label>Title:</label>
            <input type="text" onChange={(event) => handleFormChange(event,"noteTitle")}/>
            <label>Description:</label>
            <input type="text" onChange={(event) => handleFormChange(event,"noteDescription")}/>
            <label>Person:</label>
            <input type="text" onChange={(event) => handleFormChange(event,"person")}/>
            <button onClick={() => addNewNote(note)}>Add new note</button>
        </div>
    )
}

export default NoteAdder