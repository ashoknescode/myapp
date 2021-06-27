import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import { Switch, Route} from 'react-router-dom';
import './App.css';

const App = () => {

  return(

    <>
      <Switch>

       <Route path='/' component={Home} />
       <Route path='/about' component={About} />
       <Route path='/service' component={Service} />
       <Route path='/contact' component={Contact} />

      </Switch>
    </>

  );
};

export default App;