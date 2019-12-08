
export const SERVERURL = '192.168.43.129';

export const LOGIN_LOADING = 'LOGIN_LOADING';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export function addCharacterById(id) {
    const action = {
        type:LOGIN_LOADING,
        id
    }
    return action;
}