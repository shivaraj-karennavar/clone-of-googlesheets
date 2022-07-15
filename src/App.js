
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login'
import Landing from './components/Landing';
import Addtask from './components/Addtask';
import Tasklist from './components/Tasklist'
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Landing/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>
          
          <Route path="/addtask">
            <Addtask/>
          </Route>

          <Route path="/tasklist">
            <Tasklist/>
          </Route>

          <Route path="/edittask:id">
            <Edit/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;