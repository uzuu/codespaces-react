import './App.css';
import Countnumber from './components/Countnumber';
import Decriment from './components/Decriment';
import Increment from './components/Increment';
import Resetbut from './components/Resetbut';

function App() {
  return <div>
    <h1>Counter App</h1>
    <Countnumber/>
    <div class="container"> 
        <Increment/>
        <Decriment/>
        <Resetbut/>
    </div>
   
  </div>
}

export default App;