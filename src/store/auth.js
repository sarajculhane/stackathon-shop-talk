import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */



const REMOVE_USER = 'REMOVE_USER'
const GET_ME = 'GET_ME'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */

const removeUser = () => ({type: REMOVE_USER})
const getMe = user => ({type: GET_ME, user})

export const me = () => async dispatch => {
  try {
    const {data} = await axios.get('http://localhost:8080/auth/me')
    dispatch(getMe(data))
  } catch (err) {
    console.error(err, 'this is an error from me thunk')
  }
}

export const auth = (
  username,
  password,
  method
) => async dispatch => {
  try {
    if (method === 'login') {
      const {data} = await axios.post(`http://localhost:8080/auth/${method}`, {
        username,
        password
      })
      dispatch(getMe(data))
      history.push(`/user/${data.id}`)
    } else if (method === 'signup') {
      const {data} = await axios.post(`http://localhost:8080/auth/${method}`, {username, password})
      dispatch(getMe(data))
      history.push('/home')
    }
  } catch (err) {
      console.log(err, 'this is the thunk error')
}
}

export const logout = () => async dispatch => {
  try {
    await axios.post('http://localhost:8080/auth/logout')
    dispatch(removeUser())
    history.push('/')
    console.log('I am logged out')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_ME:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
