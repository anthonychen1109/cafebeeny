import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import Home from '../components/home';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
    </div>
  </BrowserRouter>
)


export default Routes;
