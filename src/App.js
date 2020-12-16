import logo from './logo.svg';
import React from 'react'
import './App.css';
import Counter from './Components/Counter'
import OmeletteContainer from './Containers/OmeletteContainer'

class App extends React.Component {

  state = {
    omelettes: [],
    counter: 0
  }

  componentDidMount() {
      fetch("http://localhost:5000/omelettes")
      .then(r => r.json())
      .then(omelettes => this.setState({omelettes: omelettes}))
  }

  incrementCounter = () => {
    this.setState((prevState) => ({counter: prevState.counter +1}))
  }

  
  render () {
    return (
      <div className="container">
        <Counter counter={this.state.counter}/>
        <OmeletteContainer allOmelettes={this.state.omelettes} incrementCounter={this.incrementCounter} />
      </div>
    );
  }

}

export default App;


// 
