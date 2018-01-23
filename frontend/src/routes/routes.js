import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import Create from '../components/create';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Create} />
      </div>
    </BrowserRouter>
  )
}

export default Routes;
