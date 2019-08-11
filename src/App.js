import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import RecipeDetails from './components/recipes/RecipeDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddRecipe from './components/recipes/AddRecipe';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/recipe/:id' component={RecipeDetails} />
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/add' component={AddRecipe} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
