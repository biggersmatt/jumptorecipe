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
        <div className='details flex column flex-grow-1'>
          <div className='ingredients flex-grow-1 border padding'>
            <p>Ingredients</p>
          </div>
          <div className='preparations flex-grow-1 border padding'>
            <p>Preparations</p>
          </div>
          <div className='instructions flex-grow-1 border padding'>
            <p>Instructions</p>
          </div>
        </div>
      </div>
    </div>
  )
}