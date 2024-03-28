///// 25
///// Just rfc given here

// import React from 'react'

// export default function CustomModal() {
//   return (
//     <div>CustomModal</div>
//   )
// }

/////============================================================================================================================== //
///// 26
///// Just give className and Import customModal.css
///// Next go to Read.jsx


// import React from 'react';
// import "./CustomModal.css";


// export default function CustomModal() {
//   return (
//     <div className="modalBackground">
//        <div className="modalContainer">
//         <h3>Hello</h3>
//        </div>
//     </div>
//   )
// }

/////============================================================================================================================================== //
///// 28
///// Recieve the data's from Read Component
///// Click the view button then PopUp Box will show, inside data also show
///// Next go to Read.js

import React from 'react';
import { useSelector } from 'react-redux';
import "./CustomModal.css";


export default function CustomModal({id, showPopup, setShowPopup}) {

  const allusers = useSelector((state)=> state.app.users);
  
  const singleUser = allusers.filter((ele) => ele.id === id);

  return (
    <div className="modalBackground">
       <div className="modalContainer">
       <button onClick={()=> setShowPopup(!showPopup)}>Close</button>
       <h2>{singleUser[0].name}</h2>
       <h4>{singleUser[0].email}</h4>
       <h5>{singleUser[0].age}</h5>
       <h6>{singleUser[0].gender}</h6>
       </div>
    </div>
  )
}