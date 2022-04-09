import './App.css';
import Layout from './UseContextExample/Layout'
import CounterContextProvider from './UseContextExample/CounterContextProvider'
import MainView from './APIsExample/MainView';
import Skeleton from './RoutingExample/Skeleton'

function App() {
  return (
    <div className="App">
      {/* <CounterContextProvider>
        <Layout /> 
        </CounterContextProvider> */}
      {/* <MainView /> */}
      <CounterContextProvider>
      <Skeleton />
      </CounterContextProvider>
    </div>
  );
}

export default App;
