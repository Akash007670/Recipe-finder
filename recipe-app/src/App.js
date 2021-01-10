import React ,{useEffect ,useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = "4dc96c05";
  const APP_KEY = "456d3bf1ba5911a4fb06777d7a32fe7b";

  const [recipe , setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pea')


  useEffect(() => {
    getRecipe()   
  },[query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value) 
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }


  return(
    <div className = "App">
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "seacrh-bar" type= "text" onChange = {updateSearch} value = {search} />
        <button className = "search-button"type = "submit">Search</button>
      </form>
      <div className = "recipe-category">
        {recipe.map(recipe => (
          <Recipe 
            key = {recipe.recipe.label}
            title = {recipe.recipe.label}
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            // ingredientLines = {recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
