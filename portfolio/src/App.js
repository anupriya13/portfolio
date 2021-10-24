import logo from './logo.svg';
import './App.css';
import imge from './images/av3.png';
import VariableWidthGrid from './grid';


function App() {
  return (
    <div>
    <img src={imge} alt="Logo" style={{height: "30%", width: "100%"}} />
    
        
<VariableWidthGrid/>

  <br></br>
  <br></br>
   </div>
  );
}

export default App;
