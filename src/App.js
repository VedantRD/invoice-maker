import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Sample1 from './templates/Sample1';
import Sample2 from './templates/Sample2';
import { Form } from './components/Form';
import ChooseTemplate from './components/ChooseTemplate';

function App() {
  return (
    <div className='form-container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Form></Form>
          </Route>
          <Route path='/show'>
            <ChooseTemplate></ChooseTemplate>
          </Route>
          {/* <Route path='/download'>
            <Form></Form>
          </Route> */}
        </Switch>
      </BrowserRouter>
      {/* <Sample1></Sample1> */}
      {/* <Sample2></Sample2> */}
    </div>
  );
}

export default App;
