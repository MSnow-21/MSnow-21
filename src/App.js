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
      />
            <WolfCard
      number={wolves[3].number}
      fact={wolves[3].fact}
      image={wolfimagefour}
      />
                  <WolfCard
      number={wolves[3].number}
      fact={wolves[3].fact}
      image={wolfimagefour}
      />
                        <WolfCard
      number={wolves[3].number}
      fact={wolves[3].fact}
      image={wolfimagefour}
      />
                        <WolfCard
      number={wolves[3].number}
      fact={wolves[3].fact}
      image={wolfimagefour}
      />

      
    </Wrapper>
    );

}
export default App;
