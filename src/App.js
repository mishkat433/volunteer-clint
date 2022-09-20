import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Author from './components/Author/Author';

export const UserContext = createContext();

const App = () => {
  const [loginUser, setLoginUser] = useState({
    name: "",
    email: " ",
    photo: "",
    selectWork: ""
  });
  return (
    <div>
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/register">
              <Register></Register>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/author">
              <Author></Author>
            </PrivateRoute>
            {
              loginUser.email === "mishkat5826@gmail.com" ?
                <PrivateRoute path="/admin">
                  <Admin></Admin>
                </PrivateRoute> :
                <Route path="*">
                  <NotFound not={"Please login ADMIN and try again"}></NotFound>
                </Route>
            }
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;
