// import List from "../components/MyRecipes/List";
// import Header from "../components/MyRecipes/Header";
import '../components/MyRecipes/myrecipes.css';

export default function MyRecipes() {
  return (
    <div className="page flex column align-center">
      {/* Header Wrapper */}
      <div className="flex justify-center width-100 padding-updown">
        {/* <Header /> */}
        <div className="coral header flex column align-center border radius width-fit shadow">
          <h1 className="padding">My Recipes</h1>
          <p className='padding'>Your collection of recipes you've created</p>
        </div>
      </div>
      
      {/* List Wrapper */}
      <div className="white list-wrapper flex align-center wrap">
        {/* Item Wrapper */}
        <div className="aqua item-wrapper width-100 padding">
          {/* Item */}
          <div className="plum border radius padding shadow">
            <div className='flex space-around align-center flex-grow-1'>
              <h2>Tofu Scramble</h2>
              <p>20mins</p>
            </div>
            <div className='flex'>
              <p className="padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
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
        {/* Item Wrapper */}
        <div className="gold item-wrapper width-100 padding">
          {/* Item */}
          <div className="plum border radius padding shadow">
            <div className='flex space-around align-center flex-grow-1'>
              <h2>Tofu Scramble</h2>
              <p>20mins</p>
            </div>
            <div className='flex'>
              <p className="padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
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
        {/* Item Wrapper */}
        <div className="coral item-wrapper width-100 padding">
          {/* Item */}
          <div className="plum border radius padding shadow">
            <div className='flex space-around align-center flex-grow-1'>
              <h2>Tofu Scramble</h2>
              <p>20mins</p>
            </div>
            <div className='flex'>
              <p className="padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
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
























      {/* <List Wrapper/>*/}
      {/* <div className='flex column align-center wrap'> */}
        {/* <ItemWrapper />*/}
        {/* <div className="width-fit shadow"> */}
          {/* <Item /> */}
          {/* <div className="lightblue flex column border radius padding">
            <div className='flex space-around align-center flex-grow-1'>
              <h2>Tofu Scramble</h2>
              <p>20mins</p>
            </div>
            <div className='flex'>
              <p className="padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
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
      </div> */}
    </div>
  )
}