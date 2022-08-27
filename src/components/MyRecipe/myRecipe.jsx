// CSS
import './myRecipe.css';
import image from './tofu-scramble.jpeg';

export default function MyRecipe(props) {
  return (
    <div className='myrecipe-wrapper'>
      <div className='myrecipe-top'>
        <h1>{props.recipe.name}</h1>
        <h2>{props.recipe.time}</h2>
      </div>
      <div className="myrecipe-mid">
        <img src={image} alt="tofu-scramble" />
        <p>{props.recipe.description}</p>
      </div>
      <ul className='myrecipe-bottom'>
        <li>Vegan</li>
        <li>|</li>
        <li>Breakfast</li>
      </ul>
    </div>
  )
}