import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageFormLink from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particle from './components/Particles/Particles';
import Clarifai from 'clarifai';
import './App.css';

const faceML = new Clarifai.App({
  apiKey: 'f0128845d2d147658b58bf0743463baa'
})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl:''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({input: e.target.value})
  }

  onButtonSubmit() {
    this.setState({imageUrl: this.state.input})

   faceML.models.predict('a403429f2ddf4b49b307e318f00e528b', this.state.input).then(res=>console.log(res)).catch(err=>console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particle/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageFormLink 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
