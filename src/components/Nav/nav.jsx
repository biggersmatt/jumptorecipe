import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <div className='nav-container'>
      <NavLink to='/myrecipes'>My Recipes</NavLink>
      <NavLink to='/recipe'>Recipe</NavLink>
      <NavLink to='/new'>New Recipe</NavLink>
    </div>
  )
}