import React from 'react'
import PropTypes from 'prop-types'

// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    return (
      <article>
        {/* I am ambitious and results-driven Full-Stack Developer with 4 years' experience, an artistic flair and substantial success in delivering innovative marketing solutions for high profile and Fortune 500 clients. Driven by a desire for professional growth, a healthy curiosity, and passion for crafting quality code to bring ideas to life. */}
      </article>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
