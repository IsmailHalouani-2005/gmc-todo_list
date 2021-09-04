import logo from './logo.svg';
import './App.css';
import ListTask from './components/ListTask'
import AddTask from './components/AddTask'
// import { Link, Router, Route } from 'react-router-dom'
import React,{useState, useEffect} from 'react'


function App({match}) {
  // useEffect(() => console.log(match))
  // console.log(match)
  const [thisType, setThisType] = useState('All')
  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <div className="top">
            <div className="theNav">
              <nav className="nav">
                <ul className="nav_list">
                  <li className="nav_item" onClick={() => setThisType('All')}>All</li>
                  <li className="nav_item" onClick={() => setThisType('Done')}>Done</li>
                  <li className="nav_item" onClick={() => setThisType('Not')}>Not</li>
                </ul>
              </nav>
            </div>
            <div className="theAddTask">
              <AddTask/>
            </div>          
          </div>
          <div className="TodoList">
            {/* <Route> */}
              <ListTask thisType={thisType}/>
            {/* </Route> */}
          </div>
        </header>
      </div>
    // </Router>
  );
}

export default App;
