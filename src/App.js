import { useState, useEffect } from 'react';
import './App.css';


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
      <div className="friendrequestoutercontainer">
        <div className="friendrequestinnercontainer">
        <h1>Friend Requests</h1>
          <ul>
            <FriendRequest name="Konrad Radecki" username="the1krad_" />
            <FriendRequest name="Finn McMillan" username="finnmcm_" />
          </ul>
        </div>
      </div>
      
      
  <div className = "friendcardcontainer">
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
    <FriendCard></FriendCard>
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


function FriendCard() {
  return (
    <>

      <div className='friendcard'>
        <ul>
          <h2>Konrad</h2>
          <h4>MATH 228-2 in 15m</h4>
        </ul>
    </div>
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
      <div className="friendrequestbox">
      {showList && (
        <ul>
          <h2>{props.name}</h2>
          <h3>@{props.username}</h3>
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