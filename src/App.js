// Dependencies
import {Route, Routes} from 'react-router-dom';

// Pages

// Components
import Nav from './components/Nav/nav';
import MyRecipes from './pages/myRecipes/myRecipes';
import Recipe from './pages/recipe/recipe';
import NewRecipe from './pages/newRecipe/newRecipe';

// CSS
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/myrecipes' element={<MyRecipes/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/new' element={<NewRecipe/>}/>
      </Routes>
    </div>
  );
}

export default App;
