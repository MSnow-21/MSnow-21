import React from 'react';
import Title from "./Components/Title";
import Wrapper from "./Components/Wrapper";
import WolfCard from './Components/WolfCard';
import About from './Components/About';
import wolves from "./wolves.json";
import wolfimageone from "./Images/andrew-ly-iUA1cea8QiY-unsplash.jpg";
import wolfimagefour from "./Images/chris-ensminger-i6yrDhfZ-XQ-unsplash.jpg";
import wolfimagethree from "./Images/marek-szturc-CM1oVEUzsNM-unsplash.jpg";


function App(){
    return(
    <Wrapper>
      <Title>The Wonderful Wolf</Title>
      <About />
      <WolfCard
      number={wolves[0].id}
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
