/////2
///// install packages ------> "npm install --save react-redux @reduxjs/toolkit"
///// Next go to index.js

// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });

//////============================================================================================================================= //
////// 5
////// GO to check Reduxtool Extension to initialState;
//// Showing the initialState;
///// Next go to pulice/index.html

import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/userDetailSlice";

export const store = configureStore({
  reducer: {
    app:userDetail,
  },
});