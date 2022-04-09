import Note from './Note'
import NoteAdder from './NoteAdder'
import {useState} from 'react'
import UserDropdown from './UserDropdown'
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
const [user, setUser] = useState('admin')

const handleDeleteNote = (id) => {
    const temp = [...notes]
    const returnArr = temp.filter(note => note.id !== id)
    setNotes(returnArr)
}

const handleAddNewNote = (note) => {
    const temp = [...notes]
    temp.push({...note, id:5})
    setNotes(temp)
}

const handleUserChange = (user) => {
    setUser(user)
}

return(
    <div>
        <h1>To do notes App</h1>
        <UserDropdown handleUserChange={handleUserChange}/>
        <hr></hr>
        {user === 'admin' &&  <NoteAdder addNewNote={handleAddNewNote}/>}
        <div>
            {notes.map(note => <Note key={note.id} {...note} handleDeleteNote={handleDeleteNote} readonly={user !== 'admin'} />)}
        </div>
    </div>
)
}

export default NotesView