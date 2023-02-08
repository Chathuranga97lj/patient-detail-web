import './App.css';
import Navbar from './components/navbar/navbar';
import Person from './components/person/person';

import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";

function App() {
  return (
   /* <Router>
      <Switch>
        <Route path="/navbar" exact><Navbar/></Route>

      </Switch>
    </Router>
*/

<div>
  <Navbar/>

  <div className='frame_main'>
    <Person/>

  </div>
</div>

    
    
  );
}

export default App;
