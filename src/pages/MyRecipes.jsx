import List from "../components/MyRecipes/List";
import Header from "../components/MyRecipes/Header";
import '../components/MyRecipes/myrecipes.css';

export default function MyRecipes() {
  return (
    <div className="page flex column align-center">
      <Header />
      <List />
    </div>
  )
}