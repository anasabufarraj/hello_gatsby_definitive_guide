import React from 'react'
import Layout from './components/layout'

export default class BasicFormPage extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    city: '',
    country: '',
  }

  handleInputChange = event => {
    const value = event.target.value // input 'value' attribute
    const name = event.target.name // input 'name' attribute

    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert('Form submitted successfully!')
  }

  render() {
    return (
      <Layout>
        <h1>Basic Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="form-label">
            First Name
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="form-label">
            Last Name
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="form-label">
            City
            <input
              className="form-control"
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="form-label">
            Country
            <input
              className="form-control"
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleInputChange}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </Layout>
    )
  }
}
