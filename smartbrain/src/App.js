import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageFormLink from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particle from './components/Particles/Particles';
import Clarifai from 'clarifai';
import './App.css';

const faceML = new Clarifai.App({
  apiKey: 'f0128845d2d147658b58bf0743463baa'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  calculateFaceLocation(data) {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height
    };
  }

  displayFaceBox(box) {
    this.setState({ box: box });
  }

  onInputChange(e) {
    this.setState({ input: e.target.value });
  }

  onButtonSubmit() {
    this.setState({ imageUrl: this.state.input });

    faceML.models
      .predict('a403429f2ddf4b49b307e318f00e528b', this.state.input)
      .then(res => {
        if (res) {
          fetch('http://localhost:8080/image', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(res => res.json())
            .then(count => {
              this.setState({ user: { entries: count } });
            });
        }
        this.displayFaceBox(this.calculateFaceLocation(res));
      })
      .catch(err => console.log(err));
  }

  onRouteChange(route) {
    if (route == 'home') {
      this.setState({ isSignedIn: true });
    } else {
      this.setState({ isSignedIn: false });
    }
    this.setState({ route: route });
  }

  render() {
    let page;

    switch (this.state.route) {
      case 'signin':
        page = <SignIn onRouteChange={this.onRouteChange} />;
        break;
      case 'register':
        page = <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />;
        break;
      case 'home':
        page = (
          <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageFormLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
        );
        break;
    }

    return (
      <div className="App">
        <Particle />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        <Logo />
        {page}
      </div>
    );
  }
}

export default App;
