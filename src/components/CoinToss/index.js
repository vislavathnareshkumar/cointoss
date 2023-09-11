import './index.css'

import React, {Component} from 'react'

class CoinToss extends Component {
  state = {
    result: 'heads',
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onHandleClick = () => {
    const newResults = Math.random() < 0.5 ? 'heads' : 'tails'

    this.setState(prevState => ({
      result: newResults,

      totalCount: prevState.totalCount + 1,
      headsCount:
        newResults === 'heads'
          ? prevState.headsCount + 1
          : prevState.headsCount,
      tailsCount:
        newResults === 'tails'
          ? prevState.tailsCount + 1
          : prevState.tailsCount,
    }))
  }

  render() {
    const {result, totalCount, headsCount, tailsCount} = this.state

    return (
      <div className="main-container">
        <div className="small-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>

          {result === 'heads' ? (
            <img
              alt={result}
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          ) : (
            <img
              alt={result}
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}
          <button className="button" type="button" onClick={this.onHandleClick}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para">Total:{totalCount}</p>

            <p className="para">Heads:{headsCount}</p>

            <p className="para">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
