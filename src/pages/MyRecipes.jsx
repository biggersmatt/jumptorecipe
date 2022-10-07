// import List from "../components/MyRecipes/List";
// import Header from "../components/MyRecipes/Header";
import '../components/MyRecipes/myrecipes.css';

export default function MyRecipes() {
  return (
    <div className="page flex column align-center">
      {/* Header Wrapper */}
      <div className="flex justify-center width-100 padding-updown">
        {/* <Header /> */}
        <div className="coral header flex column align-center border radius width-fit">
          <h1 className="padding">My Recipes</h1>
          <p className='padding'>Your collection of recipes you've created</p>
        </div>
      </div>
      {/* <List />*/}
      <div className='list flex wrap'>
        {/* <ItemWrapper />*/}
        <div className="item-wrapper">
          {/* <Item /> */}
          <div className="item flex column border radius padding">
            <div className='flex space-around align-center flex-grow-1'>
              <h2>Tofu Scramble</h2>
              <p>20mins</p>
            </div>
            <div className='flex'>
              <p className="description padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
            </div>
            <div className='flex space-around align-center flex-grow-1'>
              <div className='flex'>
                <p className='padding-sides'>Vegan</p>
                <p className='padding-sides'>|</p>
                <p className='padding-sides'>Breakfast</p>
              </div>
            </div>
          </div>
        </div>
        {/* <ItemWrapper />*/}
        <div className="item-wrapper">
          {/* <Item /> */}
          <div className="item flex column border radius padding">
            <div className='flex space-around align-center flex-grow-1'>
              <h2>Tofu Scramble</h2>
              <p>20mins</p>
            </div>
            <div className='flex'>
              <p className="description padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
            </div>
            <div className='flex space-around align-center flex-grow-1'>
              <div className='flex'>
                <p className='padding-sides'>Vegan</p>
                <p className='padding-sides'>|</p>
                <p className='padding-sides'>Breakfast</p>
              </div>
            </div>
          </div>
        </div>
        {/* <ItemWrapper />*/}
        <div className="item-wrapper">
          {/* <Item /> */}
          <div className="item flex column border radius padding">
            <div className='flex space-around align-center flex-grow-1'>
              <h2>Tofu Scramble</h2>
              <p>20mins</p>
            </div>
            <div className='flex'>
              <p className="description padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
            </div>
            <div className='flex space-around align-center flex-grow-1'>
              <div className='flex'>
                <p className='padding-sides'>Vegan</p>
                <p className='padding-sides'>|</p>
                <p className='padding-sides'>Breakfast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}