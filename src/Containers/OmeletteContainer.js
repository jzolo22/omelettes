import React from 'react'
import OmeletteCard from '../Components/OmeletteCard'

class OmeletteContainer extends React.Component {


    allOmelettes = () => {
        return this.props.allOmelettes.map(omelette => {
            return <OmeletteCard key={omelette.id} omObj={omelette} incrementCounter={this.props.incrementCounter} />
        })
    }

    render () {
        return (
        <div className="index">
            <h3>All Omelettes</h3>
            {this.allOmelettes()}
        </div>
        )
    }
    
}

export default OmeletteContainer