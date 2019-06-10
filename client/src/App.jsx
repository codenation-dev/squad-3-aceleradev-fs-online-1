import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Base from 'components/Base';
import Login from 'scenes/Login';

const Page = () => (
  <>
    OK
  </>
);

function App() {
  return (
    <Router>
      <Base>
        <Route exact path="/" component={Page} />
        <Route exact path="/login" component={Login} />
      </Base>
    </Router>
  );
}

export default App;
