import React from 'react'
import Layout from './components/layout'

export default class ContactPage extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  render() {
    return (
      <Layout>
        <h1>Contact Us</h1>
        <form method="post" action="#">
          <label className="form-label">
            Name
            <input className="form-control" type="text" name="name" id="name" />
          </label>
          <label className="form-label">
            Email
            <input className="form-control" type="email" name="email" id="email" />
          </label>
          <label className="form-label">
            Message
            <textarea className="form-control" name="message" id="message" rows="6" />
          </label>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </Layout>
    )
  }
}
