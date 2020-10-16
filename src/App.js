import React, {useState} from 'react';
import './App.css';
import fire from './fire';

function App() {
  var [message, setMessage] = useState([])
  var newMessage;
  const updateMessage = (e) =>{
    newMessage = e.target.value;
    
  }
  var showMessage;
  // var key = fire.database().ref('/').push().key
  // var messages = {
  //   value: message,
  //   // key: key
  // }
  
  
  fire.database().ref().on('child_added',function(data){
    showMessage = data
    console.log(showMessage.val())
  })
  return (
    <div className="App">

      <input type = "text" placeholder = "Please enter a message" onChange = {updateMessage}></input>
      <button onClick={()=>{
        setMessage([...message,newMessage]);fire.database().ref().push(newMessage)}} >Submit</button>
        <div>
        {message.map((value, index)=>{
          return(
            <div key = {index}>
              <h6>{value}</h6>
            </div>
          )
        })}
        </div>
    </div>
  );
}

export default App;
