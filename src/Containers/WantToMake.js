import React from 'react'
import OmeletteCard from '../Components/OmeletteCard'
import RecipeCard from '../Components/RecipeCard'

function WantToMake(props) {

    function wantedOmelettes() {
        return props.wantedOmelettes.map(om => {
            return <RecipeCard omObj={om} handleRemove={props.handleRemoveFromWant} handleMade={props.handleMadeClick} />
        })
    }

    return (
        <div className="wanttomake">
            <h3>Want to Make: </h3>
            {wantedOmelettes()}
        </div>
    )
}

export default WantToMake