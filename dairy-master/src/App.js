import logo from './logo.svg';
import './App.css';
import Data from './data.js';
import { useState } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Detail from './Detail.js';


function App() {

  let [다이어리,다이어리변경] = useState(Data);
  
  return (
    <div className="App">
      <nav className='link'> <Link to='/'>일기장</Link> </nav>
      
      <Switch>
      
      <Route exact path='/'>
       <section>
        {
          다이어리.map((a,i)=>{
            return <Postlist 다이어리={다이어리[i]} i={i} key={i}></Postlist>
          })
        }
        
       </section>
      </Route>
        
      
     
        
      <Route path='/detail/:id'>
        <Detail 다이어리={다이어리}/>
      </Route>

      </Switch>

    </div>
  );
}


function Postlist(props){
    return(
      <div className='postlist'>
        <Link to='/detail'>
          <h3>{props.다이어리.title}</h3>
          <p>{props.다이어리.content}</p>
          <p>{props.다이어리.date}</p>
        </Link>
          <hr/>
      </div>
    )
}


export default App;
