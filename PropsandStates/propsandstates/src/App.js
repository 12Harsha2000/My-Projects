
import  './components/Greeting';
import './components/Greeting_class'
import Greeting_class from './components/Greeting_class';

function App() {
  return (
    <div className="App">
     <h1>haii ananthika</h1>
     <Greeting_class name='anu' age='24'/>
     <Greeting_class name='edstem' age='22'/>
     {/* <Greeting_class/> */}
    </div>
  );
}

export default App;
