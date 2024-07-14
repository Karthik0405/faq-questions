// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  plusButtonClicked = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {eachItem} = this.props
    const {questionText, answerText} = eachItem
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altIs = isActive ? 'minus' : 'plus'
    return (
      <li className="list-items-continer ">
        <div className="list-question-container">
          <h1 className="list-items-question">{questionText}</h1>
          <button
            className="list-items-button"
            type="button"
            onClick={this.plusButtonClicked}
          >
            <img src={imgUrl} alt={altIs} />
          </button>
        </div>
        {isActive && (
          <div>
            <hr className="hr-line" />
            <p className="list-answer-is">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
