import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Welcome to React Learning</h1>
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Namasthe React
//         </a>
//       </header>
//     </div>
//   );
// }

// function MyWebsite() {
//   return (
//     <h1>Welcome All</h1>
//   );
// }

class MyWebsite extends React.Component {
  render() {
    return (
      <h1>Welcome All ! Namasthe !</h1>
    );
  }
}

export default MyWebsite;
