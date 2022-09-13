// Components
import MyRecipesList from '../../components/MyRecipesList/myRecipesList';
import MyRecipeHeader from '../../components/MyRecipeHeader/myRecipeHeader';

// CSS
import './myRecipesPage.css';

export default function MyRecipesPage() {
  return (
    <div className='myrecipe-container'>
      <MyRecipeHeader />
      <MyRecipesList />
    </div>
  )
}