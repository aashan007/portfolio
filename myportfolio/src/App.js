
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Project from './Pages/Project';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Project}/>
        <Route path='/blog' component={Blog}/>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
