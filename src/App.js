import logo from './logo.svg';
import React from 'react'
import './App.css';
import Counter from './Components/Counter'
import OmeletteContainer from './Containers/OmeletteContainer'

class App extends React.Component {

  state = {
    omelettes: [],
  }

  componentDidMount() {
      fetch("http://localhost:5000/omelettes")
      .then(r => r.json())
      .then(omelettes => this.setState({omelettes: omelettes}))
  }

  
  render () {
    return (
      <div className="container">
        <Counter />
        <OmeletteContainer allOmelettes={this.state.omelettes} handleWant={this.handleWant} wantBeenClicked={this.state.wantBeenClicked} handleMadeClick={this.handleMadeClick} />
      </div>
    );
  }

}

export default App;


// 
