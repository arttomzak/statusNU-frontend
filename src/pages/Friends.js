import { useState, useEffect } from 'react';


const Friends = () => {
    return (
        <>
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
    )
};

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
  
    const handleRequests = (friendstatus) => {
      if (friendstatus === 'accepted') {
        setDecisionmessage('Friend request accepted!');
        setShowList(false)
      } else if (friendstatus === 'denied'){
        setDecisionmessage('Friend request denied!');
        setShowList(false)
      } else {
        setDecisionmessage('Friend request is pending.');
        setShowList(true)
      }
  
      setFriendstatus(friendstatus);
    };
  
    
    useEffect(() => {
      console.log ('The friend request is:', friendstatus); // the code that will run every time a change in the variable friendstatus is recognized
  
      // Here there is space for an optional return function that would run before destroying itself and rerunning the above code with the updated values
  
    }, [friendstatus]); // dependency array (the variable the useEffect hooking is looking for a change in)
  
  
    return (
      <>
        <div className="friendrequestbox">
        {showList && (
          <ul>
            <h2>{props.name}</h2>
            <h3>@{props.username}</h3>
            <p>{ decisionmessage }</p>
            <button onClick={() => handleRequests('accepted')}>Accept</button>
            <button onClick={() => handleRequests('denied')}>Deny</button>
          </ul>
          )}
        </div>
      </>
    );
  }


export default Friends;