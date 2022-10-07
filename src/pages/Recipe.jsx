import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '../components/Recipe/recipe.css';

export default function Recipe() {
  return (
    <div className='page flex column'>
      <div className='recipe-wrapper flex flex-grow-1 padding'>
        <div className='recipe flex column align-center flex-grow-1 border radius padding'>
          <div className='time-wrapper'>
            <div className='flex flex-end'>
              <FontAwesomeIcon icon={faClock} className='padding-sides' />
              <h4 className='padding-sides'>20</h4>
            </div>
          </div>
          <div className='flex justify-center align-center flex-grow-1'>
            <h1>Tofu Scramble</h1>
          </div>
          <div className='categories flex align-center flex-grow-1'>
            <p>Vegan</p>
            <p>|</p>
            <p>Breakfast</p>
          </div>
          <div className='flex-grow-2'>
            <p>A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
          </div>
          <div className='author flex flex-end'>
            <p>- Matt</p>
          </div>
        </div>
      </div>
      <div className='details-wrapper flex flex-grow-3 padding'>
        <div className='details flex flex-grow-1'>
          <div className='ingredients-wrapper flex column flex-grow-1 border padding'>
            <div className='ingredients flex-grow-1'>
              <p>Ingredients</p>
            </div>
          </div>
          <div className='preparations-wrapper flex column flex-grow-1 border padding'>
            <div className='preparations flex-grow-1'>
              <p>Preparations</p>
            </div>
          </div>
          <div className='instructions-wrapper flex column flex-grow-1 margin-top border padding'>
            <div className='instructions flex-grow-1'>
              <p>Instructions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}