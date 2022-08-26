import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// import MyWebsite from './App';
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
// class MyNewWebsite extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyWebsite/>
//         <h2>JS, React, Redux</h2>
//       </div>
//     )
//   }
// }

// class LearnReact extends React.Component {
//   render() {
//     return (
//       <h1>Learn ReactJS in {this.props.vari} {this.props.method}</h1>
//     )
//   }
// }

// class LearnReact2 extends React.Component {
//   render() {
//     const v = "English"
//     return (
//       <LearnReact vari={v}/>
//     )
//   }
// }

// LearnReact.defaultProps = {language:"English",method:"easily"};
// ReactDOM.render(<LearnReact2/>,document.getElementById("root"));

// class LearnReact extends React.Component {
//   constructor() {
//     super();
//     this.state = {initialValue:"Namasthe",people:"Guys"}
//   }
//   initialValue = () => {
//     this.setState({initialValue:"Namasthe"})
//   }
//   changeValue = () => {
//     this.setState({initialValue:"See You Again"})
//   }
//   render() {
//     return (
//       <div>
//       <h1>{this.state.initialValue} {this.state.people}</h1>
//       <button type="button" onClick={this.initialValue}>Enter</button>
//       <button type="button" onClick={this.changeValue}>Exit</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<LearnReact/>,document.getElementById("root"))

// const sampleArray = [1,2,3,4,5,6]
// function MyList (props) {
//   const sampleArray = props.sampleArray
//   const displayList = sampleArray.map((li) => {
//     return <li>{li}</li>
//   })
//   return(
//     <ul>{displayList}</ul>
//   )
// }

// ReactDOM.render(<MyList sampleArray={sampleArray}/>,document.getElementById("root"));

// function MyList(props) {
//   const key = props.index
//   const values = props.value
//   return (
//     <li> {key} {values}</li>
//   )
// }
function ListKeyExample(props) {
  const sampleArray = props.myArray
  const sampleArrayMap = sampleArray.map((value,ind)=>{
    // return <MyList value={value} index={ind}/>
    return <li>{ind} {value}</li> 
  })
  return(
    <ul>{sampleArrayMap}</ul>
    )  
  }
  const sampleArray = [1,2,3,4,5,6]
ReactDOM.render(<ListKeyExample myArray={sampleArray}/>, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
