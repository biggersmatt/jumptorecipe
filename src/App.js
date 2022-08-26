import Nav from './components/Nav/nav';
import MyRecipes from './pages/myRecipes/myRecipes';
import Recipe from './pages/recipe/recipe';
import NewRecipe from './pages/newRecipe/newRecipe';
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <div>
        <MyRecipes/>
        <Recipe/>
        <NewRecipe/>
      </div>
    </div>
  );
}

export default App;
