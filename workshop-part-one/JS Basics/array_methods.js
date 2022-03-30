const persons = [
    {
        id:1,
        name:"Damir",
        surname:"Halilovic",
        sport:"Football", 
    },
    {
        id:2,
        name:"Melina",
        surname:"Hadzic",
        sport:"Football", 
    }, 
    {
        id:3,
        name:"Samir",
        surname:"Cirak",
        sport:"Basketball", 
    },
    {
        id:4,
        name:"Ajla",
        surname:"Glumcevic",
        sport:"Basketball", 
    },
    {
        id:5,
        name:"Amina",
        surname:"Fazlic",
        sport:"Table Tennis", 
    }, {
        id:6,
        name:"Una",
        surname:"Ukejnovic",
        sport:"Table Tennis", 
    }
]

const evenIds = persons.filter(person => person.id % 2 === 0)

const ids = persons.map(person => person.id)

const jerseys = persons.map(person => ({
            jerseyNumber: person.id,
            jerseyWriting: person.surname,    
    })
)

sorted = jerseys.sort((a,b) => { return b.jerseyNumber - a.jerseyNumber})

