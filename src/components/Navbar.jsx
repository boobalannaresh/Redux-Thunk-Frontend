///// 7
///// Just go to Bootstrap website copy the Navabar code and Paste here
///// Next go to App.js

// import React from 'react'
// import {Link} from "react-router-dom"

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid ">
//           <h4 className="navbar-brand">RTK</h4>

//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
               
//               </li>
//               <li className="nav-item">
               
//               </li>
//             </ul>
//             <input
//               className="form-control me-2 w-50"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
             
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

//////============================================================================================================ //
///// 19
///// Navbar side add two route path , give to Link tags
///// Next go to userDetailSlice.js

// import React from 'react'
// import {Link} from "react-router-dom"

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid ">
//           <h4 className="navbar-brand">RTK</h4>

//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <Link className="nav-link mx-4" to="/" >
//                Create Post
//               </Link>
//               <Link className="nav-link" to="/read">
//                All Data
//                </Link>
//             </ul>
//             <input
//               className="form-control me-2 w-50"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
             
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

/////=================================================================================================================================================================== //
///// 24
/////Just show total count and show navbar side
/////Next go to CustomModal.js

// import React from 'react'
// import { useSelector } from 'react-redux'
// import {Link} from "react-router-dom"

// export default function Navbar() {

//   const allUsers = useSelector((state)=> state.app.users);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid ">
//           <h4 className="navbar-brand">RTK</h4>

//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <Link className="nav-link mx-4" to="/" >
//                Create Post
//               </Link>
//               <Link className="nav-link" to="/read">
//                All Data ({allUsers.length})
//                </Link>
//             </ul>
//             <input
//               className="form-control me-2 w-50"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
             
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

//////=======================================================================================================================================================//
///// 37
///// Just create  useState and give onChange 
///// Next go to userDetailSlice.js


// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import {Link} from "react-router-dom"

// export default function Navbar() {

//   const allUsers = useSelector((state)=> state.app.users);
//   const [searchData, setSearchData] = useState("");


//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid ">
//           <h4 className="navbar-brand">RTK</h4>

//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <Link className="nav-link mx-4" to="/" >
//                Create Post
//               </Link>
//               <Link className="nav-link" to="/read">
//                All Data ({allUsers.length})
//                </Link>
//             </ul>
//             <input
//               className="form-control me-2 w-50"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               onChange={(e)=> setSearchData(e.target.value)}
              
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

/////==============================================================================================================================================//
///// 39
///// Just declare useDispatch and call searchUser and send the data through onChange
///// Next go to userDetailSlice.js

// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {Link} from "react-router-dom"
// import { searchUser } from '../features/userDetailSlice';

// export default function Navbar() {

//   const allUsers = useSelector((state)=> state.app.users);
//   const [searchData, setSearchData] = useState("");

//   const dispatch = useDispatch();


//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid ">
//           <h4 className="navbar-brand">RTK</h4>

//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <Link className="nav-link mx-4" to="/" >
//                Create Post
//               </Link>
//               <Link className="nav-link" to="/read">
//                All Data ({allUsers.length})
//                </Link>
//             </ul>
//             <input
//               className="form-control me-2 w-50"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               onChange={(e)=> dispatch(searchUser(setSearchData(e.target.value)))}
              
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

///////============================================================================================================================================================================== //
////// 41
///// What are you typing in Search input field that will show console side and REDEX extension side also that "searchData" state appear 
///// You can check it
///// Next go to Read.js

import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import { searchUser } from '../features/userDetailSlice';

export default function Navbar() {

  const allUsers = useSelector((state)=> state.app.users);
  const [searchData, setSearchData] = useState("");

  const dispatch = useDispatch();

  useEffect(()=> {
     dispatch(searchUser(searchData));
  },[searchData])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand">RTK</h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link mx-4" to="/" >
               Create Post
              </Link>
              <Link className="nav-link" to="/read">
               All Data ({allUsers.length})
               </Link>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=> setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  )
}
