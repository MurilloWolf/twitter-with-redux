import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { actCreatorNewTweet } from '../../store/actions/user';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      tweetInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { salvarTweet } = this.props;
    const { tweetInput } = this.state;

    salvarTweet({
      message: tweetInput,
      name: 'Murillo wolf',
      username: '@wolf',
      date: '15 May',
    });

    this.setState({ isDisabled: true, tweetInput: '' });
  }

  handleChange({ target: { value } }) {
    this.setState({
      isDisabled: !value.trim(),
      tweetInput: value,
    });
  }

  render() {
    const { isDisabled, tweetInput } = this.state;
    console.log(this.props);
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

// mapDispatchToProps

const mapDispatchToProps = (dispatch) => ({
  salvarTweet: (payload) => dispatch(actCreatorNewTweet(payload)),
});
// connect( null, ESCREVER ) (COMPONENTE)
export default connect(null, mapDispatchToProps)(Form);
