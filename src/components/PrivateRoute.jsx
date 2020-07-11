import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => {
        const value = localStorage.getItem('user')
        return value ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }} />;
}