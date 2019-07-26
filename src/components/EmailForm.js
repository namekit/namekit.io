import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <div id="signup-form">
        <p>We're currently in a private development phase. If you're interested to find our more and get early access, join our list.</p>
        <form onSubmit={this.onSubmit} method="post" action="#">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <input type="submit" value="Join the List" />
          <span className={`${message ? 'visible success' : ''} message`}>
            {message}
          </span>
        </form>
      </div>
    );
  }
}

export default EmailForm;
