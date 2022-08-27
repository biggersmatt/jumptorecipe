// Componenets
import Recipe from '../MyRecipe/myRecipe';

// CSS
import './myRecipesList.css';

const myrecipes = [
  {
    name: 'Tofu Scramble',
    description: 'A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.',
    categories: ['vegan', 'breakfast'],
    time: '20mins',
    notes: {
      date: '08/30',
      body: 'Try adding more garlic powder by using 1/2tsp instead of a 1/4tsp.',
    },
  },
  {
    name: 'Peanut Tofu',
    description: 'Homemade peanut sauce is what makes this dish delicious and the sauce can be use in other recipes as well!',
    categories: ['vegan', 'breakfast', 'asian'],
    time: '30mins',
    notes: {
      date: '10/09',
      body: 'More peanuts!',
    },
  },
  {
    name: 'Cardamon & Star Anise Rice',
    description: 'Basic white rice taken to the next level with just two spices',
    categories: ['vegan', 'side', 'asian'],
    time: '20mins',
    notes: {
      date: '12/31',
      body: 'Add 1:1 grain to water next time.',
    },
  },
]

export default function MyRecipesContainer() {
  return (
    <div className='myrecipeslist-container'>
      {myrecipes.map((recipe, index) => {
        return <Recipe
                  key={index}
                  recipe={recipe}
                />
      })}
    </div>
  )
}