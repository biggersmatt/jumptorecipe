import '../components/Recipe/recipe.css';

export default function Recipe() {
  return (
    <div className='page flex column'>
      <div className="recipe-wrapper flex flex-grow-1 padding">
        <div className='recipe flex-grow-1 border padding'>
          <p>Main</p>
        </div>
      </div>
      <div className="details-wrapper flex flex-grow-3 padding">
        <div className='details flex flex-grow-1'>
          <div className='ingredients-wrapper flex column flex-grow-1 border padding'>
            <div className="ingredients flex-grow-1">
              <p>Ingredients</p>
            </div>
          </div>
          <div className='preparations-wrapper flex column flex-grow-1 border padding'>
            <div className="preparations flex-grow-1">
              <p>Preparations</p>
            </div>
          </div>
          <div className='instructions-wrapper flex column flex-grow-1 margin-top border padding'>
            <div className="instructions flex-grow-1">
              <p>Instructions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}