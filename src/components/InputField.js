import React from 'react'
import PropTypes from 'prop-types'

class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  onSubmit = e => {
    e.preventDefault()
    let num = this.textInput.current.value.replace(/,/g, '')
    this.props.onSubmit(num)
  }

  render() {
    const { className, placeholder } = this.props
    return (
      <form onSubmit={this.onSubmit} className={className}>
        <label htmlFor="search-bar">Search</label>
        <input
          className="search-bar"
          name="search-bar"
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          ref={this.textInput}
        />
      </form>
    )
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  className: PropTypes.string
}

InputField.defaultProps = {
  placeholder: 'Enter a amount',
  className: 'container'
}

export default InputField
