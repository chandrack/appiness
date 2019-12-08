import { LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_FAILURE } from '../action/constant'
const initialState = {
    dataList: [],
    dataListSuccess: false,
    error: false
}
  
export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_LOADING:
        return {
            ...state,
            dataList: [],
            dataListSuccess: false
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            dataListSuccess: true,
            dataList: action.payload
        }
        case LOGIN_FAILURE:
        return {
            ...state,
            dataListSuccess: false,
            dataList: action.payload
        }
        default:
        return state;
    }
}