import React from 'react';
import Title from "./Components/Title";
import Wrapper from "./Components/Wrapper";
import WolfCard from './Components/WolfCard';
import About from './Components/About';
import wolves from "./wolves.json";
import wolfimageone from "./Images/wolf1.jpg";
import wolfimagefour from "./Images/wolf4.jpg";
import wolfimagethree from "./Images/wolf3.jpg";


function App(){
    return(
    <Wrapper>
      <About />
      <WolfCard
      fact={wolves[0].fact}
      image={wolfimageone}
      />
      <WolfCard
      fact={wolves[1].fact}
      image={wolfimagefour}
      />
      <WolfCard
      fact={wolves[2].fact}
      image={wolfimagethree}
      />
    </Wrapper>
    );

}
export default App;
