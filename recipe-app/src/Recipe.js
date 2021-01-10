import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title , calories , image , ingredients , ingredientLines}) => {
    return (
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <p>Calorie - {calories}</p>
            {/* <p><b>ingredientLines</b> - {ingredientLines}</p> */}
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className = {style.image} src = {image} alt = "" />
        </div>
    )
}

export default Recipe 