import { Component } from 'react'
import Score from './Score'

class Student extends Component {
  render () {
    const studentScores = this.props.scores.map((score, index) => {
      return (
        <Score
          key={`score-${index}`}
          date={score.date}
          score={score.score}
          />
      )
    })
    return (
      <>
        <h2>{this.props.name}</h2>
        <p>{this.props.bio}</p>
        {studentScores}
      </>
    )
  }
}

export default Student


