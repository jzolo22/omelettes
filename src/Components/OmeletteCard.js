import React from 'react'

class OmeletteCard extends React.Component {

    // state ={
    //     wantBeenClicked: false
    // }


    localHandleLikeClick = () => {
        this.props.incrementCounter()
    }


    render() {
        return (
            <div className="card" >
                <h4>{this.props.omObj.title}</h4>
                <img className="image" src={this.props.omObj.thumbnail} alt={this.props.omObj.title} />
                <br></br>
                <button onClick={this.localHandleLikeClick}>Like</button>
                
            </div>
        )
    }
    
}

export default OmeletteCard 