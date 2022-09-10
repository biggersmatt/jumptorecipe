// CSS
import './myRecipe.css';
import tofu from './tofu-scramble.jpeg';
import peanutTofu from './peanut-tofu.jpeg';
import rice from './rice.jpeg';

export default function MyRecipe(props) {

  
  const handleImage = () => {
    const name = props.recipe.name;
    if(name === 'Tofu Scramble') {
      return tofu;
    } else if(name === 'Peanut Tofu') {
      return peanutTofu;
    } else {
      return rice;
    }
  }
  
  const image = handleImage();

  return (
    <div className='myrecipe-wrapper'>
      <div className='myrecipe-top'>
        <h1 className={
          (props.recipe.name.length >= 26) 
          ? 'myrecipe-name-long' 
          : 'myrecipe-name-short'
          }>
            {props.recipe.name}
        </h1>
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