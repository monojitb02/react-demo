
import { authHeader } from '../_helpers';
const config = {
    apiUrl: 'http://localhost:4000'
}
export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

async function handleResponse(response) {
    const text = await response.text();
    const data = text && JSON.parse(text);
    if (response.ok) {
        return data;
    }
    if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
        //FIXME: do it the right way

        window.location.href = '/login'
    }

    const error = (data && data.message) || response.statusText;
    throw error;
}