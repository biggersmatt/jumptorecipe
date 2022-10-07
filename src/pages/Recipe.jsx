import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '../components/Recipe/recipe.css';

export default function Recipe() {
  return (
    <div className='lightblue page flex column justify-center align-center'>
      {/* Recipe Wrapper */}
      <div className='flex padding'>
        {/* Recipe */}
        <div className='coral recipe flex column align-center border radius padding shadow'>
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
            <div className="flex justify-center padding">
              {/* Ingredients */}
              <div className='plum detail flex column align-center flex-grow-1 border radius shadow'>
                <div className="white flex justify-center width-100 border-bottom padding-updown">
                  <h2 className='font-4vw'>Ingredients</h2>
                </div>
                <div className='white flex width-80 border radius margin-updown padding'>
                  <p className='font-3vw padding'>16oz</p>
                  <p className='font-3vw padding'>Firm Tofu</p>
                </div>
                <div className='white flex width-80 border radius margin-updown padding'>
                  <p className='font-3vw padding'>1Tbsp</p>
                  <p className='font-3vw padding'>Olive Oil</p>
                </div>
                <div className='white flex width-80 border radius margin-updown padding'>
                  <p className='font-3vw padding'>2Tbsp</p>
                  <p className='font-3vw padding'>Nutrional Yeast</p>
                </div>
              </div>
            </div>
          </div>
          {/* Preparations Wrapper*/}
          <div className='preparations-wrapper flex column'>
            {/* Preparations Container */}
            <div className="flex justify-center padding">
              {/* Preparations */}
              <div className='aqua detail flex column align-center flex-grow-1 border radius shadow'>
                <div className="white flex justify-center width-100 border-bottom padding-updown">
                  <h2 className='font-4vw'>Preparations</h2>
                </div>
                <div className='white flex width-80 border radius margin-updown padding shadow'>
                  <p className='font-3vw padding'>1:</p>
                  <p className='font-3vw padding'>Press and drain tofu to remove moisture</p>
                </div>
                <div className='white flex width-80 border radius margin-updown padding shadow'>
                  <p className='font-3vw padding'>2:</p>
                  <p className='font-3vw padding'>Combine all spices in a separate dish and set aside</p>
                </div>
              </div>
            </div>
          </div>
          {/* Instructions Wrapper*/}
          <div className='instructions-wrapper flex column'>
            {/* Instructions Container */}
            <div className="flex justify-center padding">
            {/* Instructions */}
            <div className='gold detail flex column align-center flex-grow-1 border radius shadow'>
                <div className="white flex justify-center width-100 border-bottom padding-updown">
                  <h2 className='font-4vw'>Instructions</h2>
                </div>
                <div className='white flex width-80 border radius margin-updown padding shadow'>
                  <p className='font-3vw padding'>1:</p>
                  <p className='font-3vw padding'>Add olive oil to a 10in pan on medium heat</p>
                </div>
                <div className='white flex width-80 border radius margin-updown padding shadow'>
                  <p className='font-3vw padding'>2:</p>
                  <p className='font-3vw padding'>Once the pan is hot, add tofu to the pan and cook for 5 minutes turning frequently</p>
                </div>
                <div className='white flex width-80 border radius margin-updown padding shadow'>
                  <p className='font-3vw padding'>3:</p>
                  <p className='font-3vw padding'>Add combined spices from preparations to the tofu and stir. Cook for 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}