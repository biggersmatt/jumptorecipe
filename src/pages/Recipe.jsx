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
      <div className='flex flex-grow-3 width-100'>
        {/* Details */}
        <div className='details flex flex-grow-1'>
          {/* Ingredients Wrapper*/}
          <div className='ingredients-wrapper flex column'>
            {/* Ingredients Container*/}
            <div className="aqua flex padding">
              {/* Ingredients */}
              <div className='plum flex column align-center flex-grow-1 border'>
                <div className="white flex justify-center width-100 border-bottom padding-updown">
                  <h2>Ingredients</h2>
                </div>
                <div className='white flex width-80 border radius margin-updown padding'>
                  <p className='padding'>16oz</p>
                  <p className='padding'>Firm Tofu</p>
                </div>
                <div className='white flex width-80 border radius margin-updown padding'>
                  <p className='padding'>1Tbsp</p>
                  <p className='padding'>Olive Oil</p>
                </div>
                <div className='white flex width-80 border radius margin-updown padding'>
                  <p className='padding'>2Tbsp</p>
                  <p className='padding'>Nutrional Yeast</p>
                </div>
              </div>
            </div>
          </div>
          {/* Preparations Wrapper*/}
          <div className='lightblue preparations-wrapper flex column margin-top'>
            {/* Preparations */}
            <div className='coral flex-grow-1 border padding'>
              <p>Preparations</p>
            </div>
          </div>
          {/* Instructions Wrapper*/}
          <div className='aqua instructions-wrapper flex column margin-top'>
            {/* Instructions */}
            <div className='gold flex-grow-1 border padding'>
              <p>Instructions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}