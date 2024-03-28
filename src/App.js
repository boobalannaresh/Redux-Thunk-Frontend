///// 1
///// Next go to app/store.js

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello world</h1>
//     </div>
//   );
// }

// export default App;

///////======================================================================================= //
///// 8
///// import Navbar.jsx
///// Next go to Create.jsx


// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       < Navbar />
//      <h1>Hello world</h1>
//     </div>
//   );
// }

// export default App;

/////======================================================================//
///// 10
///// Install React-Router-Dom 
///// Next go to Create.jsx


// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Create from './components/Create';
// import { Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       < Navbar />
      
//       <Routes>
//         <Route exact path="/" element={<Create />}/> 
//       </Routes>
//     </div>
//   );
// }

// export default App;

/////=========================================================================================================================================== //
///// 16
///// Add one more <Route exact path="/read" element={<Read />}/>
///// Next go Create.jsx

// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Create from './components/Create';
// import { Route, Routes } from 'react-router-dom';
// import Read from './components/Read';


// function App() {
//   return (
//     <div className="App">
//       < Navbar />
      
//       <Routes>
//         <Route exact path="/" element={<Create />}/> 
//         <Route exact path="/read" element={<Read />}/> 
//       </Routes>
//     </div>
//   );
// }

// export default App;

//////======================================================================================================================================================= //
///// 32
///// Just call the Update component here
///// Next go to Read.js

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      < Navbar />
      
      <Routes>
        <Route exact path="/" element={<Create />}/> 
        <Route exact path="/read" element={<Read />}/> 
        <Route exact path="/edit/:id" element={<Update />}/> 
      </Routes>
    </div>
  );
}

export default App;
