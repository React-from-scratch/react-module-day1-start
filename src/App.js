import React, { Component } from "react";
import "./App.css";
import User from "./components/User"

class App extends Component {
  // Can use State only in components that are "class extended" by "Component class"
  state = {
    userA: {
      firstName: 'Bianca',
      lastName: 'Banana',
      avatarUrl: 'https://vignette.wikia.nocookie.net/simpsonsff/images/e/ec/Lisa_Simpson.png/revision/latest?cb=20100226155634&path-prefix=es'
    },
    userB: {
      firstName: 'Pepe',
      lastName: 'Wonder',
      avatarUrl: 'https://i.pinimg.com/originals/bc/16/f9/bc16f9cb28b81f0d0a9e60bace7601cd.png'
    }
  }

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

        <User firstName={this.state.userA.firstName}/>
        {displayAvatar(this.state.userA)}
        <User firstName={this.state.userB.firstName}/>
        {displayAvatar(this.state.userB)}
        {/* First iteration */}
        {element}
      </div>
    )
  }
}

export default App;