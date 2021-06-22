import React from 'react';
import Title from "./Components/Title";
import Wrapper from "./Components/Wrapper";
import WolfCard from './Components/WolfCard';
import wolves from "./wolves.json";
import wolfimageone from "./Images/wolf1.jpg";
import wolfimagefour from "./Images/wolf4.jpg";
import wolfimagethree from "./Images/wolf3.jpg";


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
      image={wolfimagefour}
      />
      <WolfCard
      name={wolves[3].name}
      image={wolfimagethree}
      />
    </Wrapper>
    );

}
export default App;
