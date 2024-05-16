import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isTrue: false,
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
  }

  onResetForm = () => {
    this.setState({isTrue: false})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        isTrue: true,
        firstNameError: false,
        lastNameError: false,
        firstName: '',
        lastName: '',
      })
    } else if (firstName !== '' && lastName === '') {
      this.setState({lastNameError: true})
    } else if (firstName === '' && lastName !== '') {
      this.setState({firstNameError: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({firstNameError: true, lastNameError: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  blurEventFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  blurEventLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      isTrue,
    } = this.state

    const firstClassName = firstNameError ? 'error' : ''
    const lastClassName = lastNameError ? 'error' : ''
    return (
      <div className="registration-container">
        <h1 className="header">Registration</h1>
        <div className="registration-details">
          {!isTrue && (
            <form onSubmit={this.onSubmitForm} className="form">
              <label htmlFor="firstName" className="label-name-text">
                FIRST NAME
              </label>
              <input
                type="text"
                placeholder="First name"
                id="firstName"
                className={`first-name-user-input ${firstClassName}`}
                value={firstName}
                onChange={this.onChangeFirstName}
                onBlur={this.blurEventFirstName}
              />
              {firstNameError && <p className="error-msg">Required</p>}
              <label className="label-name-text" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                type="text"
                placeholder="Last name"
                id="lastName"
                className={`first-name-user-input ${lastClassName}`}
                value={lastName}
                onChange={this.onChangeLastName}
                onBlur={this.blurEventLastName}
              />
              {lastNameError && <p className="error-msg">Required</p>}
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          )}
          {isTrue && (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-img"
              />
              <p className="successful-msg">Submitted Successfully</p>
              <button
                className="submit-btn"
                onClick={this.onResetForm}
                type="button"
              >
                Submit Another Response
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
