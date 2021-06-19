import React, { Component } from 'react';
import Title from "./Components/Title";
import Wrapper from "./Components/Wrapper";
import WolfCard from './Components/WolfCard';
import wolves from "./wolves.json";

class App extends Component {

  state = {
    wolves
  };

  render(){
    return(
      <Wrapper>
        <Title>The Wolf Page</Title>
        {this.state.wolves.map(wolve => (
          <WolfCard
          name={wolve.name}
          animaltype={wolve.animaltype}
          
          />
        ))}
        
      </Wrapper>
      )
  }

}

export default App;
