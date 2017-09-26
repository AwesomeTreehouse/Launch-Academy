import React, { Component } from 'react';
import Questions from './Questions'
import Answers from './Answers'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: props.data.answers.id,
      verdict: ""
    }

    this.handleSelection = this.handleSelection.bind(this)
  }

 handleSelection(id, verdict) {
   this.setState( {selectedAnswer: id} )
   if (verdict) {
     this.setState( {verdict: "Correct"} )
   } else {
     this.setState( {verdict: "Incorrect"} )
   }
 }


 render() {
    let data = this.props.data
    console.log(this.state)

   return (
     <div>
       <h4 className="question">{data.question.body}</h4>
       <Questions
         id={data.question.id}
         key={data.question.id}
         answers={data.answers}
         handleClick={this.handleSelection}
         />
       <h5 className="verdict">{this.state.verdict}</h5>
     </div>
    )
  }
};

export default App
