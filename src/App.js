import { useState, useEffect } from 'react';
import './App.css';
import './styles.css';


function App() {
  return (
    <>
    <NavBar></NavBar>

    <div className="friendstop">
      <ul>
        <h1>FRIENDS</h1>
        <input type="text" placeholder="Search by username..."></input>
      </ul>
    </div>
{/* literally why doesn't the below div show up in the style sheet?? */}
    <div className="friendrequestcolumn">
      <ul>
       <FriendRequest name="Konrad Radecki" username="the1krad_"/> 
       <FriendRequest name="Finn McMillan" username="finnmcm_"/> 
      </ul>
    </div>
    </>
  );
}


function NavBar() {
  return (
    <>
    <nav className="navbar">
      <ul>
        <input className="searchbar" type="text" placeholder="Search users..."></input>
        <li><a href="">pfpdropdown</a></li>
        <li><a href="">Friends</a></li>
        <li><a href="index.html">status.NU</a></li>
      </ul>
      </nav>
    </>
  );
}



function FriendRequest (props) {

  const [decisionmessage, setDecisionmessage] = useState ('');
  const [friendstatus, setFriendstatus] = useState ('pending')
  const [showList, setShowList] = useState (true);



  const handleClickAccept = () => {
    setDecisionmessage('Friend request accepted!');
    setFriendstatus('accepted')
    setShowList(false)
    console.log(friendstatus)

    }
  
  const handleClickDeny = () => {
    setDecisionmessage('Friend request denied!')
    setFriendstatus('denied')
    setShowList(false)
    console.log(friendstatus)


  }

  return (
    <>
      {/* this too why isn't it popping up in style sheet */}
      <div className='friendrequestbox'>
      {showList && (
        <ul>
          <h2>{props.name}</h2>
          <h3>{props.username}</h3>
          <p>{ decisionmessage }</p>
          <button onClick={handleClickAccept}>Accept</button>
          <button onClick={handleClickDeny}>Deny</button>
        </ul>
        )}
      </div>

      
    </>
  );
}




export default App;
