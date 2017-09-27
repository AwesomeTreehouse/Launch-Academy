import React from 'react'
import TextField from './TextField'
import SelectForm from './SelectForm'

const ReviewForm = (props) => {
  return (
    <form onSubmit={props.saveReviewInput}>
      <input type="hidden" name="selected-restaurant" value={props.restaurantId} />
      <TextField
        content={props.name}
        lable='Name'
        name='input'
        handlerFunction={props.handleNameChange}
      />
      <SelectForm
        handlerFunction={props.handleRatingChange}
        />
      <TextField
        content={props.content}
        lable='Review'
        name='input'
        handlerFunction={props.handleContentChange}
      />
      <input type="submit" className="button" value="Submit "/>
    </form>
  )
}

export default ReviewForm
