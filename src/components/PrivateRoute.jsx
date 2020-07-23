import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export default class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        const { component, role, ...rest } = props;
        this.rest = rest;
        this.role = role;
        this.component = component;

        this.state = { isAuthenticated: localStorage.getItem('user') };
    }

    render() {
        return <Route {...this.rest} render={props => {
            return this.state.isAuthenticated ? <this.component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }} />;
    }
}