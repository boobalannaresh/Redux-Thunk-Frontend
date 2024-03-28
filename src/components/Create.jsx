///// 9
///// Go to Bootstrap and copy form option code paste here
///// Next go to App.js

// import React from "react";

// export default function Create() {
//   return (
//     <div>
//       <form className="w-50 mx-auto my-5">
//         <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//           />
//           <label className="form-check-label" for="exampleCheck1">
//             Check me out
//           </label>
//         </div>

//         <div className="mb-3">
//   <input class="form-check-input" type="radio"/>
//   <label class="form-check-label" for="flexRadioDefault1">
//   Male
//   </label>
// </div>
// <div className="mb-3">
//   <input class="form-check-input" type="radio"/>
//   <label class="form-check-label" for="flexRadioDefault2">
//     Female
//   </label>
// </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

/////==============================================================================================================================//
///// 11
///// Just give "name" attribute, onSubmit, create e.target function to collect the data's
///// All data show in console side
///// import useDispatch "redux"
///// Next go to features/userDetailSlice.js


// import React, { useState } from "react";
// import {useDispatch} from "react-redux";

// export default function Create() {

//     const [users, setUsers] = useState({})

//     const dispatch = useDispatch();

//     const getUserData = (e) => {
//       setUsers({...users, [e.target.name] : e.target.value})
//       console.log(users)
//     }

//    const handleSubmit=()=> {
//      dispatch()
//    }
    
//   return (
//     <div>
//       <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
//       <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//            Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             name="name"
//             onChange={getUserData}
//           />
      
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             name="email"
//             onChange={getUserData}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputAge" className="form-label">
//          Age
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputAge"
//             name="age"
//             onChange={getUserData}
//           />
//         </div>
        

//         <div className="mb-3">
//   <input className="form-check-input" type="radio" name="gender" value="Male"  onChange={getUserData}/>
//   <label className="form-check-label" htmlFor="flexRadioDefault1">
//   Male
//   </label>
// </div>
// <div className="mb-3">
//   <input className="form-check-input" type="radio" name="gender" value="Female"  onChange={getUserData}/>
//   <label className="form-check-label" htmlFor="flexRadioDefault2">
//     Female
//   </label>
// </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

//////========================================================================================================================================================= //
///// 14
///// We send the data through "dispatch" and also here console.log(data)
///// Fill the data's all fields and click the submit button then Data will store in Mockapi.io
///// Next go to Read.jsx

// import React, { useState } from "react";
// import {useDispatch} from "react-redux";
// import { createUser } from "../features/userDetailSlice";

// export default function Create() {

//     const [users, setUsers] = useState({})

//     const dispatch = useDispatch();

//     const getUserData = (e) => {
//       setUsers({...users, [e.target.name] : e.target.value})
 
//     }

//    const handleSubmit=(e)=> {
//     e.preventDefault();
//     console.log("Users....", users)
//      dispatch(createUser(users))
//    }
    
//   return (
//     <div>
//       <h3>Fill the data's</h3>
//       <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
//       <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//            Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             name="name"
//             onChange={getUserData}
//             required
//           />
      
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             name="email"
//             onChange={getUserData}
//             required
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputAge" className="form-label">
//          Age
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputAge"
//             name="age"
//             onChange={getUserData}
//             required
//           />
//         </div>
        

//         <div className="mb-3">
//   <input className="form-check-input" type="radio" name="gender" value="Male"  onChange={getUserData}  />
//   <label className="form-check-label" htmlFor="flexRadioDefault1">
//   Male
//   </label>
// </div>
// <div className="mb-3">
//   <input className="form-check-input" type="radio" name="gender" value="Female"  onChange={getUserData} />
//   <label className="form-check-label" htmlFor="flexRadioDefault2">
//     Female
//   </label>
// </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }


/////=========================================================================================================================================================== //
///// 17
///// Import only useNavigate
///// Once successfully done post method after navigate("/read") component
///// Next go to Read.jsx


import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailSlice";

export default function Create() {

  const navigate = useNavigate();

    const [users, setUsers] = useState({})

    const dispatch = useDispatch();

    const getUserData = (e) => {
      setUsers({...users, [e.target.name] : e.target.value})
 
    }

   const handleSubmit=(e)=> {
    e.preventDefault();
    console.log("Users....", users)
     dispatch(createUser(users))
     navigate("/read")
   }
    
  return (
    <div>
      <h3>Fill the data's</h3>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
      <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
           Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            onChange={getUserData}
            required
          />
      
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={getUserData}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputAge" className="form-label">
         Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAge"
            name="age"
            onChange={getUserData}
            required
          />
        </div>
        

        <div className="mb-3">
  <input className="form-check-input" type="radio" name="gender" value="Male"  onChange={getUserData}  />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Male
  </label>
</div>
<div className="mb-3">
  <input className="form-check-input" type="radio" name="gender" value="Female"  onChange={getUserData} />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Female
  </label>
</div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
