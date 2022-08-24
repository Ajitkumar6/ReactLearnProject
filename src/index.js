import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import MyWebsite from './App';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// let myStyle = {
//   color:'blue',
//   textAlign:'center'
// } 
// let myEle = 
// <div className='myStyle'>
//   <h1>Namasthe Ji</h1>
//   <h2>Pado ReactJS</h2>
//   <h3>Mazaa Karo !!!</h3>
// </div>
// ReactDOM.render(myEle,document.getElementById('root'));

// function Header() {
//   return (
//     <div>
//     <h1>Namasthe Baiya !!</h1>
//     <h2>ReactJS acchaa hai</h2>
//     </div>    
//   );
// }
// function Sidebar() {
//   return (
//     <h1>Sidebar Page</h1>
//   );
// }
// function NavBar() {
//   return (
//     <h1>NavBar Page</h1>
//   );
// }
// function MyWebsite() {
//   return (
//         <div>
//           <Header/>
//           <Sidebar/>
//           <NavBar/>
//         </div>
//   );
// // }
// ReactDOM.render(<MyWebsite/>,document.getElementById("root"));

// class MyWebsite extends React.Component {
//   render() {
//     return (
//       <h1>Welcome All</h1>
//     );
//   }
// }
class MyNewWebsite extends React.Component {
  render() {
    return (
      <div>
        <MyWebsite/>
        <h2>JS, React, Redux</h2>
      </div>
    )
  }
}

ReactDOM.render(<MyNewWebsite/>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
