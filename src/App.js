import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './Home/home';
import Page1 from './Page1/page1';
import Page2 from './Page2/page2';
// <Switch></Switch>
class App extends React.Component {
  render(){
    return(
        <Router >
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Page1" component={Page1} />
            <Route path="/Page2" component={Page2} />
          </div>
        </Router>
      );
  }
}

export default App;