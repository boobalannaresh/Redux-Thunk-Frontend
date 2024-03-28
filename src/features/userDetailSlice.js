///// 4
///// createSlice through toolkit
///// Next go to store.js

// import { createSlice } from "@reduxjs/toolkit";

// export const userDetail = createSlice({
//     name:"userDetail",
//     initialState:{
//         users:[],
//         loading: false,
//         error: null
//     }
// });

// export default userDetail.reducer;

///// ================================================================================================================ //
//// 12
///// Import createAsyncThunk then 
//// create " createUser " to POST method purpose



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //// create action
// export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue})=> {
//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {"Content-Type": "application/json"}

//     });

//     try {
//         const result = await response.json()
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// export const userDetail = createSlice({
//     name:"userDetail",
//     initialState:{
//         users:[],
//         loading: false,
//         error: null
//     }
// });

// export default userDetail.reducer;

/////// ============================================================================================================================================================= //
///// 13
///// initialState inside call , extraReducers then mention three state condition like "loading", "fullfilled", "reject"
///// Next go to Create.jsx


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //// create action
// export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

//     console.log("data",data)
//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),


//     });

//     try {
//         const result = await response.json()
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// export const userDetail = createSlice({
//     name: "userDetail",
//     initialState: {
//         users: [],
//         loading: false,
//         error: null
//     },
//     extraReducers: builder => {
//         builder
//         .addCase(createUser.pending, (state) => {
//             state.loading = true;
//         })
//         .addCase(createUser.fulfilled, (state, action) => {
//             state.loading = false;
//             state.users.push(action.payload);
//         })
//         .addCase(createUser.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload.message;
//         });
//     },
// });

// export default userDetail.reducer;

/////=============================================================================================================================== //
///// 20
///// Create one more "createAsyncThunk" and export also done then that showUser we added in extraReducers side
///// Next go to Read.js


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //// create action
// export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

  
//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),


//     });
// console.log(response)
//     try {
//         const result = await response.json()
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })



// ///// Read action

// export const showUser = createAsyncThunk("showUser", async (args,{ rejectWithValue }) => {

//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task");
//     try {
//         const result = await response.json();
//         console.log(result);
//         return result

//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// export const userDetail = createSlice({
//     name: "userDetail",
//     initialState: {
//         users: [],
//         loading: false,
//         error: null
//     },
//     extraReducers: builder => {
//         builder
//             .addCase(createUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(createUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users.push(action.payload);
//             })
//             .addCase(createUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })
//             .addCase(showUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(showUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users = action.payload;
//             })
//             .addCase(showUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export default userDetail.reducer;

/////=========================================================================================================================================== //
///// 30
///// Create one more "createAsyncThunk" for Delete Action and export also done then that deleteUser we added in extraReducers side
///// Next go to Update.js



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //// create action
// export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

  
//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),


//     });
// console.log(response)
//     try {
//         const result = await response.json()
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })



// ///// Read action

// export const showUser = createAsyncThunk("showUser", async (args,{ rejectWithValue }) => {

//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task");
//     try {
//         const result = await response.json();
//         console.log(result);
//         return result

//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// ///// Delete Action
// export const deleteUser = createAsyncThunk("deleteUser", async (id,{ rejectWithValue }) => {

//     const response = await fetch(`https://6425e156d24d7e0de4659c86.mockapi.io/task/${id}`,{
//         method: "DELETE"
//     });
//     try {
//         const result = await response.json();
//         console.log(result);
//         return result

//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// export const userDetail = createSlice({
//     name: "userDetail",
//     initialState: {
//         users: [],
//         loading: false,
//         error: null
//     },
//     extraReducers: builder => {
//         builder
//             .addCase(createUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(createUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users.push(action.payload);
//             })
//             .addCase(createUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })
//             .addCase(showUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(showUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users = action.payload;
//             })
//             .addCase(showUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })

//             .addCase(deleteUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(deleteUser.fulfilled, (state, action) => {
//                 state.loading = false;
               
//                 const {id} = action.payload;
//                 if(id){
//                     state.users = state.users.filter((ele)=> ele.id !== id)
//                 }
//             })
//             .addCase(deleteUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export default userDetail.reducer;

/////==============================================================================================================================================================
///// 35
///// Create one more "createAsyncThunk" for Update Action and export also done then that updateUser we added in extraReducers side
///// Next go to Update.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //// create action
// export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

  
//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),


//     });
// console.log(response)
//     try {
//         const result = await response.json()
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// ///// Read action

// export const showUser = createAsyncThunk("showUser", async (args,{ rejectWithValue }) => {

//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task");
//     try {
//         const result = await response.json();
//         console.log(result);
//         return result

//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// ///// Delete Action
// export const deleteUser = createAsyncThunk("deleteUser", async (id,{ rejectWithValue }) => {

//     const response = await fetch(`https://6425e156d24d7e0de4659c86.mockapi.io/task/${id}`,{
//         method: "DELETE"
//     });
//     try {
//         const result = await response.json();
//         console.log(result);
//         return result

//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// ///// Update Action

// export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
// console.log("updated data", data)
  
//     const response = await fetch(`https://6425e156d24d7e0de4659c86.mockapi.io/task/${data.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),

//     });
// console.log(response)
//     try {
//         const result = await response.json()
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })


// export const userDetail = createSlice({
//     name: "userDetail",
//     initialState: {
//         users: [],
//         loading: false,
//         error: null,
//     },
//     extraReducers: builder => {
//         builder
//             .addCase(createUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(createUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users.push(action.payload);
//             })
//             .addCase(createUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })
//             .addCase(showUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(showUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users = action.payload;
//             })
//             .addCase(showUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })

//             .addCase(deleteUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(deleteUser.fulfilled, (state, action) => {
//                 state.loading = false;
               
//                 const {id} = action.payload;
//                 if(id){
//                     state.users = state.users.filter((ele)=> ele.id !== id)
//                 }
//             })
//             .addCase(deleteUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })

//             .addCase(updateUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(updateUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users = state.users.map((ele) =>(
//                     ele.id === action.payload.id ? action.payload : ele
//                 ))
//             })
//             .addCase(updateUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })
//     },
// });

// export default userDetail.reducer;

/////===========================================================================================================================================================================================//
///// 38
///// Just create one more state in initialValues side "searchData"
///// Next go to Navbar.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //// create action
// export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

  
//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),


//     });
// console.log(response)
//     try {
//         const result = await response.json()
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// ///// Read action

// export const showUser = createAsyncThunk("showUser", async (args,{ rejectWithValue }) => {

//     const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task");
//     try {
//         const result = await response.json();
//         console.log(result);
//         return result

//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// ///// Delete Action
// export const deleteUser = createAsyncThunk("deleteUser", async (id,{ rejectWithValue }) => {

//     const response = await fetch(`https://6425e156d24d7e0de4659c86.mockapi.io/task/${id}`,{
//         method: "DELETE"
//     });
//     try {
//         const result = await response.json();
//         console.log(result);
//         return result

//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })

// ///// Update Action

// export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
// console.log("updated data", data)
  
//     const response = await fetch(`https://6425e156d24d7e0de4659c86.mockapi.io/task/${data.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),

//     });
// console.log(response)
//     try {
//         const result = await response.json()
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })


// export const userDetail = createSlice({
//     name: "userDetail",
//     initialState: {
//         users: [],
//         loading: false,
//         error: null,
//         searchData: []
//     },
//     extraReducers: builder => {
//         builder
//             .addCase(createUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(createUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users.push(action.payload);
//             })
//             .addCase(createUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })
//             .addCase(showUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(showUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users = action.payload;
//             })
//             .addCase(showUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })

//             .addCase(deleteUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(deleteUser.fulfilled, (state, action) => {
//                 state.loading = false;
               
//                 const {id} = action.payload;
//                 if(id){
//                     state.users = state.users.filter((ele)=> ele.id !== id)
//                 }
//             })
//             .addCase(deleteUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })

//             .addCase(updateUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(updateUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users = state.users.map((ele) =>(
//                     ele.id === action.payload.id ? action.payload : ele
//                 ))
//             })
//             .addCase(updateUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })
//     },
// });

// export default userDetail.reducer;

//////======================================================================================================================================================================== //
////// 40
//////  Create reducer and Export also
////// Next go to Navbar.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//// create action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

  
    const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),

    });
console.log(response)
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

///// Read action

export const showUser = createAsyncThunk("showUser", async (args,{ rejectWithValue }) => {

    const response = await fetch("https://6425e156d24d7e0de4659c86.mockapi.io/task");
    try {
        const result = await response.json();
        console.log(result);
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})

///// Delete Action
export const deleteUser = createAsyncThunk("deleteUser", async (id,{ rejectWithValue }) => {

    const response = await fetch(`https://6425e156d24d7e0de4659c86.mockapi.io/task/${id}`,{
        method: "DELETE"
    });
    try {
        const result = await response.json();
        console.log(result);
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})

///// Update Action

export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
console.log("updated data", data)
  
    const response = await fetch(`https://6425e156d24d7e0de4659c86.mockapi.io/task/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),

    });
console.log(response)
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: []
    },

    reducers: {
      searchUser: (state, action) => {
        console.log(action.payload);
        state.searchData = action.payload;
      }
    },

    extraReducers: builder => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
               
                const {id} = action.payload;
                if(id){
                    state.users = state.users.filter((ele)=> ele.id !== id)
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((ele) =>(
                    ele.id === action.payload.id ? action.payload : ele
                ))
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
    },
});

export default userDetail.reducer;

export const {searchUser} = userDetail.actions;