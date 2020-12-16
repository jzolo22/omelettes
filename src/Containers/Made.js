import React from 'react'
import OmeletteCard from '../Components/OmeletteCard'

function Made(props) {

    function madeOmelettes() {
        return props.madeOmelettes.map(omelette => {
            return <OmeletteCard key={omelette.id} omObj={omelette} inMade={props.inMade}/>
        })
    }

    return (
    <div className="made">
        <h3>Made these Omelettes</h3>
        {madeOmelettes()}
    </div>
    )
}

export default Made