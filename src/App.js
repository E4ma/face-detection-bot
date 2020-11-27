import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Nav/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Rank from './components/Rank/rank';
import './App.css';

const particlesOptions = {
  "particles": {
    "number": {
        "value": 160,
        "density": {
            "enable": false
        }
    },
    "size": {
        "value": 3,
        "random": true,
        "anim": {
            "speed": 4,
            "size_min": 0.3
        }
    },
    "line_linked": {
        "enable": false
    },
    "move": {
        "random": true,
        "speed": 1,
        "direction": "top",
        "out_mode": "out"
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "bubble"
        },
        "onclick": {
            "enable": true,
            "mode": "repulse"
        }
    },
    "modes": {
        "bubble": {
            "distance": 250,
            "duration": 2,
            "size": 0,
            "opacity": 0
        },
        "repulse": {
            "distance": 400,
            "duration": 4
        }
    }
}
        // number: {
        //   value: 30,
        //   density: {
        //     enable: true,
        //     value_area: 300
        //     // these options can be found on npm react-particles-js
        //   }
        // }
      
  }
 

class App extends Component {
  render(){
  return (
    <div className="App">
      <Particles className='particles'
                params={particlesOptions} />
                {/* because it is background + from react-particles-js npm */}
   <Navigation />
   <Logo />
   <Rank />
   <ImageLinkForm />
   {/* {<FaceRecognition />} */}
    </div>
  );
  }
}

export default App;
