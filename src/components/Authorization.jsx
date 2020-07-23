import React from "react";
import { Route, Redirect } from 'react-router-dom';
export const Authorization = (allowedRoles) => (WrappedComponent) => {
    return class WithAuthorization extends React.Component {
        constructor(props) {
            super(props)

            // In this case the user is hardcoded, but it could be loaded from anywhere.
            // Redux, MobX, RxJS, Backbone...
            this.state = {
                user: {
                    name: 'vcarl',
                    role: 'admin'
                }
            }
        }
        render() {
            if(!this.state.user){
                return <Redirect to={{ pathname: '/login', state: { from: this.location } }} />
            }
            const { role } = this.state.user
            if (allowedRoles.includes(role)) {
                return <WrappedComponent {...this.props} />
            } else {
                return <h1>Page Not Authorized for you</h1>
            }
        }
    }
}