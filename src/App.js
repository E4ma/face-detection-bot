import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Nav/navigation';
import Signin from './components/Signin/signin';
import Register from './components/Register/register';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Rank from './components/Rank/rank';
import FaceRecognition from './components/FaceRecognition/faceRecognition';
import './App.css';

const app = new Clarifai.App({
    apiKey: 'fb506370a709416cab9fd9496cf66b44'
});

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
 
  //we'll need to create a state so that our app knows what the value is that the user enters, remembers it and updates it anytime it gets changed

class App extends Component {
    constructor(){
        super();
        this.state = {
            //what the user will input
            input: ' ',
            imageUrl: ' ',
            box: {},
            //box contains values we will receive
            route: 'signin',
            isSignedIn: false
        }
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }
    
    displayFaceBox =  (box) => {
        this.setState({box: box});
    }

    onInputChange = (event) => {
        //event listener...this is a property of the app
        this.setState({input: event.target.value});
        //this logs the text inputted
    }

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        app.models
        .predict(
            'c0c0ac362b03416da06ab3fa36fb58e3', 
            this.state.input)
        //error if you do this.state.imageUrl. Bad request 404
        .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
                //calculate face location with response data
           .catch(err => console.log(err));
    }

    onRouteChange = (route) => {
        if (route === 'signout'){
            this.setState({isSignedIn: false})
        } else if (route === 'home'){
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    }

  render(){
    //   const { isSignedIn, imageUrl, route, box } = this.state;
    // then remove all the this.state here....this is destructuring
  return (
    <div className="App">
      <Particles className='particles'
                params={particlesOptions} />
                {/* because it is background + from react-particles-js npm */}
    
   <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
   {this.state.route === 'home' 
   ? <div> 
    <Logo />
   <Rank />
   <ImageLinkForm 
   onInputChange={this.onInputChange} 
   onButtonSubmit={this.onButtonSubmit}
   />
   <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
   </div>
   :(
       this.state.route === 'signin'
       ? <Signin onRouteChange={this.onRouteChange} />
       : <Register onRouteChange={this.onRouteChange} />
   )
   }
    </div>
  );
  }
}

export default App;
