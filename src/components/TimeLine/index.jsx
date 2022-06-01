import React from 'react';
import { connect } from 'react-redux';
import Tweet from '../Tweet';

class TimeLine extends React.Component {
  render() {
    const { tweets } = this.props;
    return (
      <>
        {tweets.map((tweet) => <Tweet key={tweet.message} info={tweet} />)}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  tweets: state.timelineReducer.tweets,
});

export default connect(mapStateToProps)(TimeLine);
