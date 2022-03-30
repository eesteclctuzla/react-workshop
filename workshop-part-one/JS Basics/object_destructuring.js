// OBJECT DESTRUCTURING

const fball = {
    name:"Football",
    rules: ["Can't use hands", "Winner scores more goals"],
}

const person = {
    id:1,
    name:"Damir",
    surname:"Halilovic",
    sport:fball, 
}

const person2 = person
person.name = "Emir"

// isto ime imaju oboje

const person3 = { ... person }
person.name = "Damir ponovno"
// kod person3 ostaje ime Emir jer je kopirano kako treba

const {id, name } = person
// izvlacimo vrijednosti koje zelimo iz objekta
