import Note from "./Note"
import NoteAdder from "./NoteAdder"
import {useState} from "react"
import UserDropdown from "./UserDropdown"
const mockData = [
    {
        id:1,
        noteTitle:"Srediti kucu",
        noteDescription:"Usisati, obrisati prozore itd..",
        person:"Mama"
    },
    {
        id:2,
        noteTitle:"Oprati auto",
        noteDescription:"Usisati, obrisati prozore, oprati izvana, izbaciti smece",
        person:"Tata",
    },
    {
        id:3,
        noteTitle:"Popraviti krov",
        noteDescription:"Skinuti mahovinu sto je zarasla, ocistiti oluke, zamijeniti puknuti crijep",
        person:"Tata",
    },
    {
        id:4,
        noteTitle:"Umrijet na igricama",
        noteDescription:"Picim lol citav dan lolz",
        person:"Damir"
    },    
]

const NotesView = () => {
    const [notes, setNotes] = useState(mockData)
    const [ids, setIds] = useState(5)
    const [user,setUser] = useState('admin')

    const deleteNote = (id) => {
        const filteredNotes = notes.filter(note => note.id !== id)
        // setNotes(filteredNotes)
        setNotes([...filteredNotes])
    }

    const addNote = (note) => {
        setNotes([...notes, {...note, id:ids}])
        setIds(ids + 1)
    }

    const handleUserChange = (user) => {
        setUser(user)
    }

    return(
        <div>
            <h1>All my notes</h1>
            <UserDropdown handleUserChange={handleUserChange} />
            <hr></hr>
            {user === 'admin' && <NoteAdder addNote={addNote}/>}
            {notes.map(note => <Note readonly={user !== 'admin'} key={note.id} {...note} deleteNote={deleteNote}/>)}
        </div>
    )
}

export default NotesView