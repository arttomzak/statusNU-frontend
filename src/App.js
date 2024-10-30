import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
    <NavBar></NavBar>

    <div>
      <ul>
        <h1>FRIENDS</h1>
        <input type="text" placeholder="Search by username..."></input>
      </ul>
    </div>

    <FriendRequest name="Konrad Radecki" username="the1krad_"/> 
  


    </>
  );
}

// left off at about an hour into the zoom, goal for next time is to try to assign the buttons to changing the
// states of variables which decide whether a friend request goes through or not

function NavBar() {
  return (
    <>
      <ul>
        <input type="text" placeholder="Search users..."></input>
        <li><a href="">pfpdropdown</a></li>
        <li><a href="">Friends</a></li>
        <li><a href="index.html">status.NU</a></li>
      </ul>
    </>
  );
}

function FriendRequest (props) {
  
  const [decision, setDecision] = useState("not friends");
  console.log(decision) 


return (
  <div style={{backgroundColor: 'black', color: 'white', width: '300px', height: '100px'}}>
    <h2>{props.name}</h2>
    <h3>{props.username}</h3>
    <button onClick={() => setDecision("friends")}>Accept</button>
    <button>Deny</button>


    
  </div>
  




  );
}


    // <main>
    //   <div class="friendstop">
    //     <ul>
    //       <h1>FRIENDS</h1>
    //       <input type="text" placeholder="Search by username...">
    //     </ul>
    //   </div>
    // </main> */}

















export default App;
