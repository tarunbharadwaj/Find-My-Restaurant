import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { RoutedTabs, NavTab } from "react-router-tabs";
import { Admins, Moderators, Users } from "./components";
import "styles/react-router-tabs.css";
import Router from './Router';

const UsersPage = ({ match }) => {
    return (
        <div>
            <NavTab to="/">Home</NavTab>
            <NavTab to="/details">Moderators</NavTab>
            <NavTab to="/list">Users</NavTab>
            <Switch>
                <Route
                    exact
                    path={`${match.path}`}
                    render={() => <Redirect replace to={`${match.path}/admins`} />}/>
                <Route path={`${match.path}/`} component={Admins} />
                <Route path={`${match.path}/details`} component={Moderators} />
                <Route path={`${match.path}/list`} component={Users} />
            </Switch>
        </div>
    );
  };
   
export default UsersPage;