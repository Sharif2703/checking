// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onclickDecrease = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < 0) {
      this.setState({activeIndex: reviewsList.length - 1})
    } else {
      this.setState(prevState => ({activeIndex: prevState - 1}))
    }
  }

  onclickIncrease = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex > reviewsList.length - 1) {
      this.setState({activeIndex: 0})
    } else {
      this.setState(prevState => ({activeIndex: prevState + 1}))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    return (
      <div className="review-app-bg">
        <h1>Reviews</h1>
        <div className="review-app-card">
          <button type="button" onClick={this.onclickDecrease}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div>
            <img src={reviewsList[activeIndex].imgUrl} alt="username" />
          </div>
          <button type="button" onClick={this.onclickIncrease}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
