import React from 'react';
import './styles.css';

class Tweet extends React.Component {
  render() {
    const imageUrl = 'https://avatars.githubusercontent.com/u/32676014?s=400&u=55762815361e5e2ac574c712de51c2deb724b116&v=4';
    return (
      <div className="tweet-container">
        <div>
          <div className="avatar">
            <img alt="" src={imageUrl} />
          </div>
          <div className="tweet-body">
            <div>
              <p className="tweet-title">
                Murillo wolf
                <span>
                  {'\t-\t'}
                  @murillowolf
                </span>
                <span>
                  {'\t-\t'}
                  May 12
                </span>
              </p>
              <br />
              <p>Ola gente, esse é meu primeiro tweet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
