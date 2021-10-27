import React from 'react';
import './App.css';
import imge from './images/av3.png';
import a from './grid';
import VariableWidthGrid from './grid';
import services from './services/services';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
/* 
    <React.Fragment>
          
          <Router>
<VariableWidthGrid/>
<Switch>

<Route path='/services' component={services}/>
</Switch>
          </Router> 
          </React.Fragment> */