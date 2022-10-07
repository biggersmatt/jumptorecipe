import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '../components/Recipe/recipe.css';

export default function Recipe() {
  return (
    <div className='lightblue page flex column justify-center align-center'>
      {/* Recipe Wrapper */}
      <div className='plum flex padding'>
        {/* Recipe */}
        <div className='coral recipe flex column align-center border radius padding'>
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
      {/* Details Wrapper*/}
      <div className='gold flex flex-grow-3 width-100'>
        {/* Details */}
        <div className='coral details flex flex-grow-1 padding'>
          {/* Ingredients Wrapper*/}
          <div className='flex column flex-grow-1 border'>
            {/* Ingredients */}
            <div className='aqua flex column align-center flex-grow-1'>
              <div className="white flex justify-center width-100 border-bottom padding-updown">
                <h2>Ingredients</h2>
              </div>
              <div className='white flex width-90 border radius margin-updown padding'>
                <p className='padding'>16oz</p>
                <p className='padding'>Firm Tofu</p>
              </div>
              <div className='white flex width-90 border radius margin-updown padding'>
                <p className='padding'>1Tbsp</p>
                <p className='padding'>Olive Oil</p>
              </div>
              <div className='white flex width-90 border radius margin-updown padding'>
                <p className='padding'>2Tbsp</p>
                <p className='padding'>Nutrional Yeast</p>
              </div>
            </div>
          </div>
          {/* Preparations Wrapper*/}
          <div className='lightblue preparations-wrapper flex column flex-grow-1 margin-top border padding'>
            {/* Preparations */}
            <div className='coral flex-grow-1'>
              <p>Preparations</p>
            </div>
          </div>
          {/* Instructions Wrapper*/}
          <div className='aqua instructions-wrapper flex column flex-grow-1 margin-top border padding'>
            {/* Instructions */}
            <div className='gold flex-grow-1'>
              <p>Instructions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}