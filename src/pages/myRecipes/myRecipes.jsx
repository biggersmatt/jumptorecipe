// Dependencies
import Select from 'react-select';

// Components
import MyRecipesList from '../../components/MyRecipesList/myRecipesList';

// CSS
import './myRecipes.css';

const options = [
  { value: 'vegan', label: 'Vegan' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'side', label: 'Side' },
]

export default function MyRecipesPage() {
  return (
    <div className='myrecipe-container'>
      <div className='myrecipe-header'>
        <h1>My Recipes</h1>
        <p>A collection of recipes you've created</p>
        <div className='myrecipe-category'>
          <label>Categories</label>
          <Select
            defaultValue={[options[2], options[3]]}
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      <MyRecipesList />
    </div>
  )
}