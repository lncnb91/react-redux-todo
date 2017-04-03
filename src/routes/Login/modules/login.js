// ------------------------------------
// Constants
// ------------------------------------
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR'
// ------------------------------------
// Actions
// ------------------------------------

export function login ({ username, password }) {
  return (dispatch, getState) => {
    dispatch({
      type    : LOGIN_REQUEST,
      payload : { username, password, loading: true }
    })

    fetch('/api/login').then((rs) => {
      'use strict'
      return rs.json();
    }).then((rs) => {
      'use strict'
      console.log(rs);
    })

     // todo: call api login
    return new Promise((resolve, reject) => {
      resolve() // test success
      // reject(new Error('Looix'))
    })
      .then(rs => {
        dispatch(loginSuccess())
      })
      .catch(err => dispatch(loginError(err)))
  }
}

export function loginSuccess () {
  return {
    type    : LOGIN_REQUEST_SUCCESS,
    payload : { message: 'Login success' }
  }
}
export function loginError (err) {
  return {
    type    : LOGIN_REQUEST_ERROR,
    payload : { message: err.message }
  }
}

export const actions = {
  login,
  loginSuccess,
  loginError
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_REQUEST]    : (state, action) => ({ ...state, ...action.payload }),
  [LOGIN_REQUEST_SUCCESS]    : (state, action) => ({ ...state, ...action.payload }),
  [LOGIN_REQUEST_ERROR] : (state, action) => ({ ...state, ...action.payload })
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
