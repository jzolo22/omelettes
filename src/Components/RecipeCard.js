import React from 'react'

function RecipeCard (props) {

    function listIngredients () {
        let ingredientsArray = props.omObj.ingredients.split(" ")
        return ingredientsArray.map(ingredient => {
            return <li>{ingredient}</li>
        })
    }

    function handleLocalRemove() {
        props.handleRemove(props.omObj)
    }

    function handleLocalMade() {
        props.handleMade(props.omObj)
    }


    return (
        <div className="card" >
            <h4>{props.omObj.title}</h4>
            <ul>
                {listIngredients()}
            </ul>
            <br></br>
            <button onClick={handleLocalRemove}>No Longer Interested</button>
            <button onClick={handleLocalMade}>Made It!</button>
        </div>
    )
    
}

export default RecipeCard 