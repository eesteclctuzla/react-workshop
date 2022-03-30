const MainView = () => {
    // funkcjie i clanovi komponente
    
    const counter = 1
    
    const handleCounterIncrement = () => {
        counter++
    }
    
    const handleCounterDecrement = () => {
        counter--
    }
    
    // sve sto funkcija renderuje
    return (
        <div>
            <h1>Hello world from our first component</h1>
            <button onClick={handleCounterIncrement}> Increment the counter</button>
            <button onClick={handleCounterDecrement}> Decrement the counter </button>
            <h2>Counter value:{counter}</h2>
        </div>
    )
    
    }
    