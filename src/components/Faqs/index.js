// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faq-bg-contianer">
        <div className="faq-questions-container">
          <h1 className="faq-questions-headaing">FAQs</h1>
          <ul className="faq-list-container">
            {faqsList.map(eachItem => (
              <FaqItem
                eachItem={eachItem}
                key={eachItem.id}
                showAnswer={this.showAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
