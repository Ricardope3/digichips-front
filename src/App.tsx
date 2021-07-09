import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateOrJoinRoom from 'components/CreateOrJoinRoom';
import { SocketStoreProvider } from 'stores/useSocket';
import { UserStoreProvider } from 'stores/useUser';
function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SocketStoreProvider>
            <UserStoreProvider>
              <CreateOrJoinRoom></CreateOrJoinRoom>
            </UserStoreProvider>
          </SocketStoreProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
