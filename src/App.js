// Dependencies
import {Route, Routes} from 'react-router-dom';

// Pages
import MyRecipes from './pages/MyRecipes';
import Recipe from './pages/recipeShowPage/recipeShowPage';
import NewRecipe from './pages/newRecipePage/newRecipePage';
// import Test from './components/Test/TestPage'

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
          {/* <Route path='/myrecipes' element={<MyRecipes/>}/> */}
          <Route path='/recipe' element={<Recipe/>}/>
          <Route path='/new' element={<NewRecipe/>}/>
        </Routes>
      </div>
    </div>
  );
}