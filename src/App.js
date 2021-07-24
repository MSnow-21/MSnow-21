import React from 'react';
import Title from "./Components/Title";
import Wrapper from "./Components/Wrapper";
import WolfCard from './Components/WolfCard';
import About from './Components/About';
import wolves from "./wolves.json";
import wolfimageone from "./Images/andrew-ly-iUA1cea8QiY-unsplash.jpg";
import wolfimagetwo from "./Images/chris-ensminger-i6yrDhfZ-XQ-unsplash.jpg";
import wolfimagethree from "./Images/marek-szturc-CM1oVEUzsNM-unsplash.jpg";
import wolfimagefour from "./Images/tahoe-Ikge1ZIk9yc-unsplash.jpg";
import wolfimagefive from "./Images/marek-szturc-n3qWOO_WO3E-unsplash.jpg";
import wolfimagesix from "./Images/marc-olivier-jodoin-tauPAnOIGvE-unsplash.jpg";
import wolfimageseven from "./Images/philipp-pilz-QZ2EQuPpQJs-unsplash.jpg";
import wolfimageeight from "./Images/simon-infanger-nFRghBvqSb0-unsplash.jpg";

function App(){
    return(
    <Wrapper>
      <Title>The Wonderful Wolf</Title>
      <About />
      <WolfCard
      number={wolves[0].number}
      fact={wolves[0].fact}
      image={wolfimageone}
      />
      <WolfCard
      number={wolves[1].number}
      fact={wolves[1].fact}
      image={wolfimagetwo}
      />
      <WolfCard
      number={wolves[2].number}
      fact={wolves[2].fact}
      image={wolfimagethree}
      />
      <WolfCard
      number={wolves[3].number}
      fact={wolves[3].fact}
      image={wolfimagefour}
      source={wolves[3].src}
      />
      <WolfCard
      number={wolves[4].number}
      fact={wolves[4].fact}
      image={wolfimagefive}
      source={wolves[4].src}
      />
      <WolfCard
      number={wolves[5].number}
      fact={wolves[5].fact}
      image={wolfimagesix}
      source={wolves[5].src}
      />
      <WolfCard
      number={wolves[6].number}
      fact={wolves[6].fact}
      image={wolfimageseven}
      source={wolves[6].src}
      />
      <WolfCard
      number={wolves[7].number}
      fact={wolves[7].fact}
      image={wolfimageeight}
      source={wolves[7].src}
      />      
    </Wrapper>
    );

}
export default App;
