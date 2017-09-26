import React, { Component } from 'react';
import Tweet from './Tweet'

const API = 'http://localhost:4567/api/v1/tweets';

class TwitterFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: props.tweets
    }
  }

  componentDidMount() {
    fetch(API)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({tweets: json});
      });
    }

    // componentDidMount() {
    //   fetch(API)
    //     .then(response) => response.json())
    //     .then(body => {
    //       this.setState({
    //         tweets: body
    //       });
    //     });
    //   }

  render() {
    let tweets = this.state.tweets.map(tweet => {
      return <Tweet key={tweet.id_str} tweet={tweet} />
    })

    return (
      <div className="row columns small-12 medium-9 large-6">
        <div className="twitter-feed">
          {tweets}
        </div>
      </div>
    );
  }
}

export default TwitterFeed;
