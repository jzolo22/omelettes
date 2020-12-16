import React from 'react'

class OmeletteCard extends React.Component {

    state ={
        wantBeenClicked: false
    }


    localHandleWantClick = () => {
        this.props.handleWant(this.props.omObj)
        this.setState({wantBeenClicked: true})
    }

    localHandleMadeClick = () => {
        this.props.handleMadeClick(this.props.omObj)
    }

    render() {
        return (
            <div className="card" >
                <h4>{this.props.omObj.title}</h4>
                <img className="image" src={this.props.omObj.thumbnail} alt={this.props.omObj.title} />
                <br></br>
                <button onClick={this.localHandleWantClick}>Like</button>
                
            </div>
        )
    }
    
}

export default OmeletteCard 