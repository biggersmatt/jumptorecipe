// Dependencies
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

// CSS
import '../components/NewRecipe/newrecipe.css';

export default function NewRecipe() {
  const { handleSubmit, register, control } = useForm();

  const [recipe, setRecipe] = useState({
    name: '',
    time: '',
    categories: [],
  });

  const onSubmit = (data) => { 
    const categories = data.ReactSelect;
    let newCategories = categories.map(category => {
      return category.value;
    })
    setRecipe({
      name: data.name,
      time: data.time,
      categories: newCategories,
    })
  }

  console.log(recipe);

  return (
    <div className='lightblue page flex column justify-center align-center'>
      {/* Header Wrapper */}
      <div className="flex justify-center width-100 padding-updown">
        {/* <Header /> */}
        <div className="plum header flex column align-center border radius width-fit shadow">
          <h1 className="padding">New Recipe</h1>
          <p className='padding'>Create a new recipe to for yourself and others</p>
        </div>
      </div>
      {/* Recipe Wrapper */}
      <div className='flex padding'>
        {/* Recipe */}
        <div className='coral recipe flex column align-center border radius padding shadow'>
          <div className='flex column justify-center align-center padding'>
            <h1 className='font-8vw'>Tofu Scramble</h1>
          </div>
          <div className='flex justify-center align-center padding'>
            {/* Form */}
            {/* <p className='width-90 font-4vw'>A high protein alternative to scrambled eggs! With the right spice, this scramble tastes better than traditional egg scrambles.</p> */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex column">
              <div>
                <input type="text" placeholder='Name'{...register("name")} />
                <input type="text" placeholder='Time'{...register("time")} />
              </div>

              <Controller
                name="ReactSelect"
                control={control}
                render={({ field }) => (
                  <Select
                    isClearable
                    isMulti
                    {...field}
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" }
                    ]}
                  />
                )}
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* Details Wrapper*/}
      <div className='flex justify-center flex-grow-3 width-100'>
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