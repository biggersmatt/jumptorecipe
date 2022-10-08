// import List from "../components/MyRecipes/List";
// import Header from "../components/MyRecipes/Header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
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
      <div className="flex align-center wrap">
        {/* Item Wrapper */}
        <div className="item-wrapper width-100 padding">
          {/* Item */}
          <div className="lightblue item flex column align-center border radius padding shadow">
            {/* Top */}
            <div className='flex flex-end width-90'>
              <FontAwesomeIcon icon={faClock} className='font-3vw padding' />
              <p className='font-3vw padding-updown'>20mins</p>
            </div>
            <div className='flex flex-grow-1 justify-center align-center width-90 border-bottom'>
              <h2 className='font-5vw'>Tofu Scramble</h2>
            </div>
            {/* Middle */}
            <div className='flex align-center flex-grow-2 width-90'>
              <p className="item-description padding">A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p>
            </div>
            {/* Bottoms */}
            <div className='flex space-around align-center flex-grow-1'>
              <div className='flex'>
                <p className='font-3vw padding-sides'>Vegan</p>
                <p className='font-3vw padding-sides'>|</p>
                <p className='font-3vw padding-sides'>Breakfast</p>
              </div>
            </div>
          </div>
        </div>
        {/* Item Wrapper */}
        <div className="item-wrapper width-100 padding">
          {/* Item */}
          <div className="lightblue item flex column align-center border radius padding shadow">
            {/* Top */}
            <div className='flex flex-end width-90'>
              <FontAwesomeIcon icon={faClock} className='font-3vw padding' />
              <p className='font-3vw padding-updown'>30mins</p>
            </div>
            <div className='flex flex-grow-1 justify-center align-center width-90 border-bottom'>
              <h2 className='font-5vw'>Chipotle Crispy Tater Tots</h2>
            </div>
            {/* Middle */}
            <div className='flex align-center flex-grow-2 width-90'>
              <p className="item-description padding">Great as a side to burgers or hotdogs for a BBQ! Crispy and crunchy the way we all love them.</p>
            </div>
            {/* Bottoms */}
            <div className='flex space-around align-center flex-grow-1'>
              <div className='flex'>
                <p className='font-3vw padding-sides'>Vegan</p>
                <p className='font-3vw padding-sides'>|</p>
                <p className='font-3vw padding-sides'>Side</p>
              </div>
            </div>
          </div>
        </div>
        {/* Item Wrapper */}
        <div className="item-wrapper width-100 padding">
          {/* Item */}
          <div className="lightblue item flex column align-center border radius padding shadow">
            {/* Top */}
            <div className='flex flex-end width-90'>
              <FontAwesomeIcon icon={faClock} className='font-3vw padding' />
              <p className='font-3vw padding-updown'>20mins</p>
            </div>
            <div className='flex flex-grow-1 justify-center align-center width-90 border-bottom'>
              <h2 className='font-5vw'>Cardamon & Star Anise Rice</h2>
            </div>
            {/* Middle */}
            <div className='flex align-center flex-grow-2 width-90'>
              <p className="item-description padding">Basic white rice taken to the next level with just two spices</p>
            </div>
            {/* Bottoms */}
            <div className='flex space-around align-center flex-grow-1'>
              <div className='flex'>
                <p className='font-3vw padding-sides'>Vegan</p>
                <p className='font-3vw padding-sides'>|</p>
                <p className='font-3vw padding-sides'>Side</p>
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