import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render(){
    const formatName = user => `${user.firstName} ${user.lastName}`;
    
    const user = {
      firstName: 'Juanita',
      lastName: 'Banana',
      avatarUrl: 'https://vignette.wikia.nocookie.net/simpsonsff/images/e/ec/Lisa_Simpson.png/revision/latest?cb=20100226155634&path-prefix=es'
    };

    const displayAvatar = user => {
      if(user.avatarUrl) {
        return <img src={user.avatarUrl} alt="avatar"/>
      } else {
        return <img src='https://sites.google.com/site/eiminight/_/rsrc/1307812232268/lisa-simpson/LisaSimpson.gif?height=200&width=190'/>
      }
    }

    const element = (
      <div>
        <h2>Hello {formatName(user)}, you're welcome!</h2>
        <p>Your avatar is:</p>
      </div>
    );

    return (
      <div className="App">
        <h1>Hello World!</h1>
        {element}
        {displayAvatar(user)}
      </div>
    )
  }
}

export default App;