import './App.css';
import {NavBar} from './components/navbar/NavBar';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from './components/HomePage/HomePage';
import {Footer} from './components/footer/Footer';
import {ProjectList} from './components/projects/ProjectList';
import {AboutMe} from './components/about/AboutMe';
import {Contact} from './components/contact/Contact';

function App() {

  return (
    <div className="App">
      {/* <Router> */}
        <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/projects' component={ProjectList}/>
          <Route path='/about' component={AboutMe}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      {/* </Router> */}
    </div>
  );
}

export default App;
