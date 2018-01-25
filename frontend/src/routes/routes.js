import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import Menu from '../containers/menu';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/menu" component={Menu} />
      </div>
    </BrowserRouter>
  )
}

export default Routes;
