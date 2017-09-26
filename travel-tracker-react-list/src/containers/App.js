import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import Places from '../components/Places'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    }
    this.handleListPick = this.handleListPick.bind(this)
  }

  handleListPick(id) {
    let newArray = this.state.selected.concat(id)
    this.setState({ selected: newArray })
  }

  render() {

    console.log(this.state)
    let selected = this.state.selected
    let places = this.props.data.places
    let placesList = places.map(place => {

      let handleClick = () => {
        this.handleListPick(place.id)
      }

      let className = ""
      if (selected.includes(place.id)) {
        className = "selected"
      }

    return(
      <Places
        id={place.id}
        key={place.id}
        place={place.name}
        className={className}
        handleClick={handleClick}
        />
      )
    });

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
            <ul>
              {placesList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
