import axios from "axios";
import {  SERVERURL, LOGIN_LOADING,  LOGIN_SUCCESS,  LOGIN_FAILURE } from '../action/constant';

export function loginloading() {
	return {
		type: LOGIN_LOADING,
	};
}
export function loginsuccess(payload) {
	return {
		type:  LOGIN_SUCCESS,
		payload: payload
	};
}

export function loginfailure(payload) {
	return {
		type:  LOGIN_FAILURE,
		payload: payload
	};
}

export function loginDetails(basicData) {
	console.log(basicData);
	const data = new FormData();
	data.append("username", basicData.username);
	data.append("password", basicData.password);

    return (dispatch) => {
		dispatch(loginloading());
		if (basicData.username && basicData.password) {
			axios({
                
				method: "POST",
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				url: `${SERVERURL}Login`,
				crossDomain: true,
				data,
			}).then((res) => {
				if (res.status === 200) {
					dispatch(loginsuccess(res.data));
				}
			}).catch((error) => {
				if (error.response.status === 401) {
					dispatch(loginfailure(error.response.data));
				}
			});
		} else {
			const errors = {
				error: 'invalid details',
			};
			dispatch(loginfailure(errors));
		}
	};
}
