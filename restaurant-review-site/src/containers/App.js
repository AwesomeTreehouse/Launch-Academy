import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      name: '',
      rating: '',
      content: '',
      selectedId: restaurants[0].id
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.saveReviewInput = this.saveReviewInput.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleRatingChange(event) {
    this.setState({ rating: event.target.value })
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value })
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  saveReviewInput(event) {
  event.preventDefault();
  let userReview = {
    restaurant_id: this.state.selectedId,
    name: this.state.name,
    rating: this.state.rating,
    content: this.state.content
  }
  this.setState({ reviews: [...this.state.reviews, userReview], name: '', rating: '', content: ''})
}

  render() {
    let restaurantComponents = restaurants.map((restaurant) => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}/>
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Restaurant</h1>
            {restaurantComponents}
          </div>
          <div className="small-9 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>
            <Reviews data={relevantReviews} />
            <ReviewForm
              name={this.state.name}
              rating={this.state.rating}
              content={this.state.content}
              handleNameChange={this.handleNameChange}
              handleRatingChange={this.handleRatingChange}
              handleContentChange={this.handleContentChange}
              saveReviewInput={this.saveReviewInput}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default App
