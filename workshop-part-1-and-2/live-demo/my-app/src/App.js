import './App.css';
import CounterContextProvider from './UseContextDemo/CounterContextProvider';
import Layout from './APIsDemo/Layout'

function App() {

  
  return (
    <div className="App">
      <CounterContextProvider>
        <Layout /> 
      </CounterContextProvider>
    </div>
  );
}

export default App;
