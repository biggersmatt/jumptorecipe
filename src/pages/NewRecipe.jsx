// Dependencies
import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from 'react-select';

// CSS
import '../components/NewRecipe/newrecipe.css';

const useStyles = makeStyles(() => ({
  textField: {
    display: 'block',
    boxSizing: 'border-box',
    backgroundColor: 'whitesmoke',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid white',
    padding: '10px 15px',
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: 500
  },
  input: {
    color: 'black'
  }
}));

export default function NewRecipe() {
  const classes = useStyles();
  const { handleSubmit, register, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fieldArray"
  });

  const [recipe, setRecipe] = useState({
    name: '',
    time: '',
    description: '',
    categories: [],
  });
  
  const onSubmit = (data) => { 
    const categories = data.categories;
    let newCategories = categories.map(category => {
      return category.value;
    })
    setRecipe({
      name: data.name,
      time: data.time,
      description: data.description,
      categories: newCategories,
    })
  }

  return (
    <div className='lightblue page flex column justify-center align-center'>
      {/* Header Wrapper */}
      <div className='flex justify-center width-100 padding-updown'>
        {/* <Header /> */}
        <div className='coral header flex column align-center border radius width-fit shadow'>
          <h1 className='padding'>New Recipe</h1>
          <p className='padding'>Create a new recipe to for yourself and others</p>
        </div>
      </div>
      {/* Recipe Wrapper */}
      <div className='flex justify-center width-100 padding-updown'>
        {/* Recipe */}
        <div className='coral recipe flex column align-center width-fit border radius shadow'>
          <div className='flex justify-center align-center width-100 padding'>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center width-100'>
              {/* Form Wrapper */}
              <div className='flex column space-around width-90'>
                {/* Form Left */}
                <div>
                  <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' {...register('name')} />
                  </div>
                  <div>
                    <label htmlFor='time'>Minutes to cook?</label>
                    <input type='text' {...register('time')} />
                  </div>
                  <div>
                    <label htmlFor='categories'>Categories</label>
                    <Controller
                      name='categories'
                      control={control}
                      render={({ field }) => (
                        <Select
                          isClearable
                          isMulti
                          {...field}
                          options={[
                            { value: 'vegan', label: 'Vegan' },
                            { value: 'breakfast', label: 'Breakfast' },
                            { value: 'side', label: 'Side' }
                          ]}
                        />
                      )}
                    />
                  </div>
                </div>
                {/* Form Right */}
                <div>
                  <label>Description</label>
                  <TextField 
                    fullWidth
                    multiline
                    className={classes.textField}
                    InputProps={{className: classes.input}}
                    {...register('description')}
                  />
                </div>
                <Button 
                  type='submit' 
                  sx={{ 
                    backgroundColor: 'whitesmoke',
                    color: 'black',
                    margin: '10px 0',
                    '&:hover': {
                      backgroundColor: 'green',
                      color: 'white',
                    }
                  }}
                >Submit
                </Button>
              </div>
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
            <div className='flex justify-center padding'>
              {/* Ingredients */}
              <div className='plum detail flex column align-center flex-grow-1 border radius shadow'>




              <ul className='flex column width-90 padding-updown'>
                {fields.map((item, index) => (
                  <li key={item.id} className='flex'>
                    <Button onClick={() => remove(index)}>Delete</Button>
                    <Controller
                      render={({ field }) => <input {...field} />}
                      name={`fieldArray.${index}.ingredient`}
                      control={control}
                    />
                  </li>
                ))}
              </ul>
              <Button 
              onClick={() => append()}
              sx={{ 
                backgroundColor: 'whitesmoke',
                color: 'black',
                margin: '10px 0',
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                }
              }}
              >
                Add an Ingredient
              </Button>
              <input type="submit" />


















                {/* <div className='white flex justify-center width-100 border-bottom padding-updown'>
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
                </div> */}
              </div>
            </div>
          </div>
          {/* Preparations Wrapper*/}
          <div className='preparations-wrapper flex column'>
            {/* Preparations Container */}
            <div className='flex justify-center padding'>
              {/* Preparations */}
              <div className='aqua detail flex column align-center flex-grow-1 border radius shadow'>
                <div className='white flex justify-center width-100 border-bottom padding-updown'>
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
            <div className='flex justify-center padding'>
            {/* Instructions */}
            <div className='gold detail flex column align-center flex-grow-1 border radius shadow'>
                <div className='white flex justify-center width-100 border-bottom padding-updown'>
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