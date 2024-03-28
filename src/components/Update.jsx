///// 31
///// Just copy the code from Create.jsx to here, that only do
///// Next go  to App.js


// import React, { useState } from "react";
// import {useDispatch} from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createUser } from "../features/userDetailSlice";

// export default function Update() {

//     const navigate = useNavigate();

//     const [users, setUsers] = useState({})

//     const dispatch = useDispatch();

//     const getUserData = (e) => {
//       setUsers({...users, [e.target.name] : e.target.value})
 
//     }

//    const handleSubmit=(e)=> {
//     e.preventDefault();
//     console.log("Users....", users)
//      dispatch(createUser(users))
//      navigate("/read")
//    }

//   return (
//     <div>
//       <h3>Edit the data's</h3>
//       <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             name="name"
//             // onChange={getUserData}
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
//             // onChange={getUserData}
//             required
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputAge" className="form-label">
//             Age
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputAge"
//             name="age"
//             // onChange={getUserData}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             value="Male"
//             // onChange={getUserData}
//           />
//           <label className="form-check-label" htmlFor="flexRadioDefault1">
//             Male
//           </label>
//         </div>
//         <div className="mb-3">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             value="Female"
//             // onChange={getUserData}
//           />
//           <label className="form-check-label" htmlFor="flexRadioDefault2">
//             Female
//           </label>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }


/////==================================================================================================================================================================== //
///// 34
///// check the edit button click, that particular data will show in console side
///// Then that data will show Edit form UI also 
///// Next go  to userDetailSlice.js

// import React, { useState } from "react";
// import { useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";

// export default function Update() {

//     const {id} = useParams();

//     const navigate = useNavigate();

//     const dispatch = useDispatch();

//     const [updateData, setUpdateData] = useState();

//     const {users, loading} = useSelector((state)=> state.app);

// useEffect(()=> {
// if (id) {
//     const singleUser = users.filter((ele) => ele.id === id);
//     setUpdateData(singleUser[0]);
// }
// }, [])

// console.log(updateData);


//   return (
//     <div>
//       <h3>Edit the data's</h3>
//       <form className="w-50 mx-auto my-5">
//         <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             name="name"
//             value={updateData && updateData.name}
//             // onChange={getUserData}
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
//             value={updateData && updateData.email}
//             // onChange={getUserData}
//             required
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputAge" className="form-label">
//             Age
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputAge"
//             name="age"
//             value={updateData && updateData.age}
//             // onChange={getUserData}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             value="Male"
//             checked={updateData && updateData.gender === "Male"}
//             // onChange={getUserData}
//           />
//           <label className="form-check-label" htmlFor="flexRadioDefault1">
//             Male
//           </label>
//         </div>
//         <div className="mb-3">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             value="Female"
//             checked={updateData && updateData.gender === "Female"}
//             // onChange={getUserData}
//           />
//           <label className="form-check-label" htmlFor="flexRadioDefault2">
//             Female
//           </label>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

/////=================================================================================================================================================================
///// 36
///// send the data through dispatch "updateUser"
///// You can Edit the value and update...
///// Go and check, it will work or not
///// Next go to Navbar.js

import React, { useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

export default function Update() {

    const {id} = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [updateData, setUpdateData] = useState();

    const {users, loading} = useSelector((state)=> state.app);

useEffect(()=> {
if (id) {
    const singleUser = users.filter((ele) => ele.id === id);
    setUpdateData(singleUser[0]);
}
}, []);

const newData = (e) => {
    setUpdateData({...updateData, [e.target.name] : e.target.value})
}

const handleUpdate = (e) => {
e.preventDefault();
dispatch(updateUser(updateData));
navigate("/read");
}

return (
    <div>
      <h3>Edit the data's</h3>
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
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
            value={updateData && updateData.name}
            onChange={newData}
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
            value={updateData && updateData.email}
            onChange={newData}
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
            value={updateData && updateData.age}
            onChange={newData}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
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
