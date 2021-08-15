import * as types from 'state/Redux/constants'

const initialState = {
  loading: false,
  loaded: false,
  user: {},
}

const authReducer = (
  state = initialState,
  action: { type: any; msg: any; err: any; data: any }
) => {
  switch (action.type) {
    case types.SIGNUP:
      return state
    case types.SIGNUP_ERR:
      return state
    case types.LOGIN:
      return state
    case types.LOGIN_ERR:
      return state
    case types.LOGOUT:
      return state
    case types.IS_LOGGED_IN:
      return {
        ...state,
        user: action.data,
      }

    case types.START_LOADING:
      return {
        ...state,
        loading: true,
      }
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false,
      }
    case types.LOADER:
      return {
        ...state,
        loaded: action.data,
      }
    default:
      return state
  }
}

export default authReducer
