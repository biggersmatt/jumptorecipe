// CSS
import './myRecipe.css';

export default function MyRecipe(props) {
  return (
    <div className='myrecipe-wrapper'>
      <h1>{props.recipe.name}</h1>
    </div>
  )
}