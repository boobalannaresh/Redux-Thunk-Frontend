///// 15
///// Just create a new component and give rfc commond's
///// Next go to App.js

// import React from 'react'

// export default function Read() {
//   return (
//     <div>Read</div>
//   )
// }

//////====================================================================================================================================//
///// 18
///// Go to Bootstrap components and take " card " code then paste here
///// Next go to Navbar.js


// import React from 'react'

// export default function Read() {
//   return (
//     <div>
//       <h3>All Data's</h3>
//       <div className="card w-50 mx-auto">
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="card-link">Card link</a>
//     <a href="#" className="card-link">Another link</a>
//   </div>
// </div>
//     </div>
//   )
// }

/////======================================================================================================================================================= //
///// 21
///// Import useDispatch and call the "showUser"
///// check Redux Extension side "showUser" data's will show 
///// Console side also show 

// import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { showUser } from '../features/userDetailSlice';

// export default function Read() {

//   const dispatch = useDispatch();

//   useEffect(()=>{
// dispatch(showUser())
//   },[])

//   return (
//     <div>
//       <h3>All Data's</h3>
//       <div className="card w-50 mx-auto">
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="card-link">Card link</a>
//     <a href="#" className="card-link">Another link</a>
//   </div>
// </div>
//     </div>
//   )
// }

//////============================================================================================================================================================================= //
///// 22
///// Get data's through "useSelector" then map the data and show 
///// 

// import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { showUser } from '../features/userDetailSlice';

// export default function Read() {

//   const dispatch = useDispatch();

//   const { users, loading } = useSelector((state)=> state.app)

//   useEffect(()=>{
// dispatch(showUser())
//   },[])

//   if(loading){
//     return <h2> Loading </h2>
//   }

//   return (
//     <div>
//       <h3>All Data's</h3>
//      {
//       users && users.map((ele)=>(
//         <div className="card w-50 mx-auto">
//         <div className="card-body">
//           <h5 className="card-title">{ele.name}</h5>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//           <p className="card-text"></p>
//           <a href="#" className="card-link">Card link</a>
//           <a href="#" className="card-link">Another link</a>
//         </div>
//       </div>
//       ))
//      }
//     </div>
//   )
// }

/////======================================================================================================================================== //
///// 23
///// Just add " View , Edit & Delete " links
///// Next go to Navbar.js

// import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { showUser } from '../features/userDetailSlice';

// export default function Read() {

//   const dispatch = useDispatch();

//   const { users, loading } = useSelector((state)=> state.app)

//   useEffect(()=>{
// dispatch(showUser())
//   },[])

//   if(loading){
//     return <h2> Loading </h2>
//   }

//   return (
//     <div>
//       <h3>All Data's</h3>
//      {
//       users && users.map((ele)=>(
//         <div className="card w-50 mx-auto my-2">
//         <div className="card-body">
//           <h5 className="card-title">{ele.name}</h5>
//           <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
//           <p className="card-text">{ele.age}</p>
//           <a href="#" className="card-link">View</a>
//           <a href="#" className="card-link">Edit</a>
//           <a href="#" className="card-link">Delete </a>
//         </div>
//       </div>
//       ))
//      }
//     </div>
//   )
// }

/////==================================================================================================================================================//
///// 27
///// Just create two state and onClick function then recieve ID pass that ID through "CustomModal"
///// Next go  to CustomModal


// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { showUser } from '../features/userDetailSlice';
// import CustomModal from './CustomModal';

// export default function Read() {

//   const dispatch = useDispatch();

//   const [id, setId] = useState();

//   const [showPopup, setShowPopup] = useState(false);

//   const { users, loading } = useSelector((state)=> state.app)

//   useEffect(()=>{
// dispatch(showUser())
//   },[])

//   if(loading){
//     return <h2> Loading </h2>
//   }

//   return (
//     <div>

// {showPopup && (
//         <CustomModal
//           id={id}
//           showPopup={showPopup}
//           setShowPopup={setShowPopup}
//         />
//       )}
//       <h3>All Data's</h3>
//      {
//       users && users.map((ele)=>(
//         <div key={ele.id} className="card w-50 mx-auto my-2">
//         <div className="card-body">
//           <h5 className="card-title">{ele.name}</h5>
//           <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
//           <p className="card-text">{ele.gender}</p>
//           <button className="card-link" onClick={() => [setId(ele.id), setShowPopup(!showPopup)]}>View</button>
//           <a href="#" className="card-link">Edit</a>
//           <a href="#" className="card-link">Delete </a>
//         </div>
//       </div>
//       ))
//      }
//     </div>
//   )
// }

/////==========================================================================================================================//
///// 29
///// Give Link tag and pass the ID through dispatch and Import deleteUser also
///// Next go to userDetailSlice.js


// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteUser, showUser } from '../features/userDetailSlice';
// import CustomModal from './CustomModal';
// import { Link } from "react-router-dom";

// export default function Read() {

//   const dispatch = useDispatch();

//   const [id, setId] = useState();

//   const [showPopup, setShowPopup] = useState(false);

//   const { users, loading } = useSelector((state)=> state.app)

//   useEffect(()=>{
// dispatch(showUser())
//   },[])

//   if(loading){
//     return <h2> Loading </h2>
//   }

//   return (
//     <div>

// {showPopup && (
//         <CustomModal
//           id={id}
//           showPopup={showPopup}
//           setShowPopup={setShowPopup}
//         />
//       )}
//       <h3>All Data's</h3>
//      {
//       users && users.map((ele)=>(
//         <div key={ele.id} className="card w-50 mx-auto my-2">
//         <div className="card-body">
//           <h5 className="card-title">{ele.name}</h5>
//           <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
//           <p className="card-text">{ele.gender}</p>
//           <button className="card-link" onClick={() => [setId(ele.id), setShowPopup(!showPopup)]}>View</button>
//           <Link to="#" className="card-link">Edit</Link>
//           <Link onClick={()=> dispatch(deleteUser(ele.id))}className="card-link">Delete </Link>
//         </div>
//       </div>
//       ))
//      }
//     </div>
//   )
// }

/////====================================================================================================================================================================================================== //
///// 33
///// Give the path to navigate to Update component
///// go and check Edit button working, it will work


// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteUser, showUser } from '../features/userDetailSlice';
// import CustomModal from './CustomModal';
// import { Link } from "react-router-dom";

// export default function Read() {

//   const dispatch = useDispatch();

//   const [id, setId] = useState();

//   const [showPopup, setShowPopup] = useState(false);

//   const { users, loading } = useSelector((state)=> state.app)

//   useEffect(()=>{
// dispatch(showUser())
//   },[])

//   if(loading){
//     return <h2> Loading </h2>
//   }

//   return (
//     <div>

// {showPopup && (
//         <CustomModal
//           id={id}
//           showPopup={showPopup}
//           setShowPopup={setShowPopup}
//         />
//       )}
//       <h3>All Data's</h3>
//      {
//       users && users.map((ele)=>(
//         <div key={ele.id} className="card w-50 mx-auto my-2">
//         <div className="card-body">
//           <h5 className="card-title">{ele.name}</h5>
//           <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
//           <p className="card-text">{ele.gender}</p>
//           <button className="card-link" onClick={() => [setId(ele.id), setShowPopup(!showPopup)]}>View</button>
//           <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
//           <Link onClick={()=> dispatch(deleteUser(ele.id))}className="card-link">Delete </Link>
//         </div>
//       </div>
//       ))
//      }
//     </div>
//   )
// }

/////==========================================================================================================================================================//
///// 42
///// Filter method using for Searching purpose , But it will searching only name wise
///// You can check it, Searching functionality working fine


// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteUser, showUser } from '../features/userDetailSlice';
// import CustomModal from './CustomModal';
// import { Link } from "react-router-dom";

// export default function Read() {

//   const dispatch = useDispatch();

//   const [id, setId] = useState();

//   const [showPopup, setShowPopup] = useState(false);

//   const { users, loading, searchData } = useSelector((state)=> state.app)

//   useEffect(()=>{
//     dispatch(showUser())
//   },[])

//   if(loading){
//     return <h2> Loading </h2>
//   }

//   return (
//     <div>

// {showPopup && (
//         <CustomModal
//           id={id}
//           showPopup={showPopup}
//           setShowPopup={setShowPopup}
//         />
//       )}
//       <h3>All Data's</h3>
//      {
//       users && 
//       users.filter((ele)=> {
//         if (searchData.length === 0) {
//           return ele
//         } else {
//           return ele.name.toLowerCase().includes(searchData.toLowerCase())
//         }
//       })
//       .map((ele)=>(
//         <div key={ele.id} className="card w-50 mx-auto my-2">
//         <div className="card-body">
//           <h5 className="card-title">{ele.name}</h5>
//           <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
//           <p className="card-text">{ele.gender}</p>
//           <button className="card-link" onClick={() => [setId(ele.id), setShowPopup(!showPopup)]}>View</button>
//           <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
//           <Link onClick={()=> dispatch(deleteUser(ele.id))}className="card-link">Delete </Link>
//         </div>
//       </div>
//       ))
//      }
//     </div>
//   )
// }

//////==================================================================================================================//
////// 43



import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailSlice';
import CustomModal from './CustomModal';
import { Link } from "react-router-dom";

export default function Read() {

  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState();

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state)=> state.app)

  useEffect(()=>{
    dispatch(showUser())
  },[])

  if(loading){
    return <h2> Loading </h2>
  }

  return (
    <div>

{showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h3>All Data's</h3>
      <input className="form-check-input" name="gender" type="radio" checked={radioData === ""} onChange={(e)=> setRadioData("")}/>
  <label className="form-check-label">All</label>

  <input className="form-check-input" name="gender" value="Male" type="radio" checked={radioData === "Male"} onChange={(e)=> setRadioData(e.target.value)}/>
  <label className="form-check-label">Male</label>

  <input className="form-check-input" name="gender" value="Female" type="radio" checked={radioData === "Female"} onChange={(e)=> setRadioData(e.target.value)}/>
  <label className="form-check-label">Female</label>
     <div>

  
     {
      users && 
      users
      .filter((ele)=> {
        if (searchData.length === 0) {
          return ele
        } else {
          return ele.name.toLowerCase().includes(searchData.toLowerCase())
        }
      })
      .filter((ele)=> {
        if (radioData === "Male") {
          return ele.gender === radioData;
        } else if(radioData === "Female"){
          return ele.gender === radioData;          
        }else return ele;
      })
      .map((ele)=>(
        <div key={ele.id} className="card w-50 mx-auto my-2">
        <div className="card-body">
          <h5 className="card-title">{ele.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
          <p className="card-text">{ele.gender}</p>
          <button className="card-link" onClick={() => [setId(ele.id), setShowPopup(!showPopup)]}>View</button>
          <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
          <Link onClick={()=> dispatch(deleteUser(ele.id))}className="card-link">Delete </Link>
        </div>
      </div>
      ))
     }
    </div>
    </div>
  )
}
