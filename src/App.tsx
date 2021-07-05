import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateOrJoinRoom from 'components/CreateOrJoinRoom';
import CreateRoom from 'components/CreateRoom';
import JoinRoom from 'components/JoinRoom';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CreateOrJoinRoom></CreateOrJoinRoom>
        </Route>
        <Route path="/create">
          <CreateRoom></CreateRoom>
        </Route>
        <Route path="/join">
          <JoinRoom></JoinRoom>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
