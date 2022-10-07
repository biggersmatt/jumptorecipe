import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '../components/Recipe/recipe.css';

export default function Recipe() {
  return (
    <div className='page flex column justify-center align-center'>
      {/* Recipe Information */}
      <div className='recipe-wrapper flex padding'>
        <div className='recipe flex column align-center border radius padding'>
          <div className='width-100'>
            <div className='flex flex-end'>
              <FontAwesomeIcon icon={faClock} className='font-4vw padding-sides' />
              <p className='font-3vw padding-sides'>20</p>
            </div>
          </div>
          <div className='flex column justify-center align-center padding'>
            <h1 className='font-8vw'>Tofu Scramble</h1>
            <div className='flex align-center'>
              <p className='font-3vw padding-sides'>Vegan</p>
              <p className='font-3vw padding-sides'>|</p>
              <p className='font-3vw padding-sides'>Breakfast</p>
            </div>
          </div>
          <div className='flex justify-center align-center padding'>
            <p className='width-90 font-4vw'>A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
          </div>
          <div className='flex flex-end width-100'>
            <p className='font-3vw'>- Matt</p>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className='details-wrapper flex flex-grow-3 width-100'>
        <div className='details flex flex-grow-1 padding'>
          <div className='ingredients-wrapper flex column flex-grow-1 border padding'>
            <div className='ingredients flex-grow-1'>
              <p>Ingredients</p>
            </div>
          </div>
          <div className='preparations-wrapper flex column flex-grow-1 margin-top border padding'>
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