// Dependencies
import Select from 'react-select';

// Components
import MyRecipesList from '../../components/MyRecipesList/myRecipesList';

// CSS
import './myRecipesPage.css';

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
          <Select
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select test"
            classNamePrefix="select"
          />
        </div>
      </div>
      <MyRecipesList />
    </div>
  )
}