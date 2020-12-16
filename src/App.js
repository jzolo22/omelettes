import logo from './logo.svg';
import React from 'react'
import './App.css';
import Form from './Components/Form'
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
        <Form />
        <OmeletteContainer allOmelettes={this.state.omelettes} incrementCounter={this.incrementCounter} />
      </div>
    );
  }

}

export default App;


// 
