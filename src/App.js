import logo from './logo.svg';
import React from 'react'
import './App.css';
import Form from './Components/Form'
import OmeletteContainer from './Containers/OmeletteContainer'

class App extends React.Component {

  state = {
    omelettes: [],
    search: ""
  }

  componentDidMount() {
      fetch("http://localhost:5000/omelettes")
      .then(r => r.json())
      .then(omelettes => this.setState({omelettes: omelettes}))
  }

  newOmelette = (omObj) => {
      fetch("http://localhost:5000/omelettes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(omObj)
      })
        .then(r => r.json())
        .then(newOm => this.setState({omelettes: [newOm, ...this.state.omelettes]}))
  }

  handleSearch = (input) => {
    this.setState({search: input})
  }

  filteredOmelettes = () => {
    return this.state.omelettes.filter(om => om.title.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render () {
    return (
      <div className="container">
        <Form newOmelette={this.newOmelette} value={this.state.search} handleSearch={this.handleSearch}/>
        <OmeletteContainer allOmelettes={this.filteredOmelettes}/>
      </div>
    );
  }

}

export default App;


// 
