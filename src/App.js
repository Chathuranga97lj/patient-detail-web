import './App.css';
import Navbar from './components/navbar/navbar';


import Landing from './pages/landing';
import Landing1 from './pages/landing1';
import Landing2 from './pages/landing2';

import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";

function App() {
  return (
   <Router>
      <Switch>
        <Route path="/" exact><Landing/></Route>
        <Route path="/1" exact><Landing1/></Route>
        <Route path="/2" exact><Landing2/></Route>

      </Switch>
    </Router>



  </div>
</div>

    
    
  );
}

export default App;
