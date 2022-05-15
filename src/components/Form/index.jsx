import React from 'react';
import './styles.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      tweetInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  static handleSubmit(event) {
    event.preventDefault();
  }

  handleChange({ target: { value } }) {
    this.setState({
      isDisabled: !value.trim(),
      tweetInput: value.trim(),
    });
  }

  render() {
    const { isDisabled, tweetInput } = this.state;
    const imageUrl = 'https://avatars.githubusercontent.com/u/32676014?s=400&u=55762815361e5e2ac574c712de51c2deb724b116&v=4';
    return (
      <div className="container">
        <div>
          <div className="avatar">
            <img alt="user-avatar" src={imageUrl} />
          </div>
          <div className="form-input">
            <form onSubmit={this.handleSubmit}>
              <textarea
                onChange={this.handleChange}
                maxLength={120}
                value={tweetInput}
                placeholder="What's happening?"
              />
              <button
                className="btn-twitter"
                disabled={isDisabled}
                type="submit"
              >
                Tweet

              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
