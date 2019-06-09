import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Input from 'components/Input';

const Page = () => (
  <>
    OK
    <Input />
  </>
);

const Page2 = ({ match }) => (
  <>
    Page2
    {match.params.id}
  </>
);

function App() {
  return (
    <Router>
      <Route exact path="/" component={Page} />
      <Route exact path="/page2" component={Page2} />
    </Router>
  );
}

export default App;
