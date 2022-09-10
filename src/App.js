// Dependencies
import {Route, Routes} from 'react-router-dom';

// Pages
import MyRecipes from './pages/myRecipes/myRecipesPage';
import Recipe from './pages/recipe/recipe';
import NewRecipe from './pages/newRecipe/newRecipe';

// Components
import Nav from './components/Nav/nav';

// CSS
import './App.css';

export default function App() {
  return (
    <div className='app'>
      <Nav/>
      <div className='content'>
        <Routes>
          <Route path='/myrecipes' element={<MyRecipes/>}/>
          <Route path='/recipe' element={<Recipe/>}/>
          <Route path='/new' element={<NewRecipe/>}/>
        </Routes>
      </div>
    </div>
  );
}

