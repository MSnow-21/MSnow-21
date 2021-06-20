import React from 'react';
import Title from "./Components/Title";
import Wrapper from "./Components/Wrapper";
import WolfCard from './Components/WolfCard';
import wolves from "./wolves.json";
import wolfimageone from "./Images/wolf1.jpg"


function App(){
    return(
    <Wrapper>
      <Title>Wolves</Title>
      <WolfCard
      name={wolves[0].name}
      image={wolfimageone}
      />
      <WolfCard
      name={wolves[1].name}
      image={wolfimageone}
      />
      <WolfCard
      name={wolves[3].name}
      image={wolfimageone}
      />
    </Wrapper>
    );

}
export default App;
