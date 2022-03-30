const obj = {
    name:"mojObjekat",
    id:5,
    showMe: () => { console.log("I am object")}
}

const fun1 = (input) => {
    console.log(input)
}

obj.showMe = fun1

obj.showMe("I want to show this instead")