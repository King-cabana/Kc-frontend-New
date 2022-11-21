import { configureStore } from "@reduxjs/toolkit";
import authSlice  from "./redux/authSlice"


const store = configureStore({
  reducer: {
    user: authSlice, 
  },
})

export default store

// import { configureStore, compose, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import { userSigninReducer } from './reducers/userReducers';

// const initialState = {
//   userSignin: {
//     userInfo: localStorage.getItem('userInfo')
//       ? JSON.parse(localStorage.getItem('userInfo'))
//       : null,
//   }  
// }

// const reducer = combineReducers({
//   userSignin: userSigninReducer,
// })


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = configureStore(
//   reducer,
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );
// export default store;