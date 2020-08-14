// import axios from 'axios'
// import history from '../history'

// /**
//  * ACTION TYPES
//  */
// const GET_USER = 'GET_USER'

// /**
//  * ACTION CREATORS
//  */
// const getUser = user => ({type: GET_USER, user})
// const remove = id => ({type: REMOVE_USER, id})
// /**
//  * THUNK CREATORS
//  */
// export const fetchSingleUser = id => async dispatch => {
//   try {
//     const {data} = await axios.get(`.././api/users/${id}`)
//     dispatch(getUser(data))
//   } catch (err) {
//     console.log(`Retrieving user: ${id} unsuccesful`, err)
//   }
// }


// /**
//  * REDUCER
//  */
// export default function(defaultUser = {}, action) {
//   switch (action.type) {
//     case GET_USER:
//       return action.user
//     default:
//       return defaultUser
//   }
// }
