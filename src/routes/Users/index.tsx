import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Path, routeTo } from 'src/router';

import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
import UsersList from './UsersList';

const Users: React.FC = () => (
  <Switch>
    <Route exact path={routeTo(Path.USERS_ROOT)} component={UsersList} />
    <Route path={routeTo(Path.USERS_ADD)} component={UserAdd} />
    <Route path={routeTo(Path.USERS_EDIT)} component={UserDetail} />
  </Switch>
);

export default Users;
