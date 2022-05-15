import React, { useState } from 'react';
import './styles.css';

export default function Form() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [tweetInput, setTweetInput] = useState('');
  const imageUrl = 'https://avatars.githubusercontent.com/u/32676014?s=400&u=55762815361e5e2ac574c712de51c2deb724b116&v=4';

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = ({ target: { value } }) => {
    setIsDisabled(!value.trim());
    setTweetInput(value.trim());
  };

  return (
    <div className="container">
      <div>
        <div className="avatar">
          <img alt="user-avatar" src={imageUrl} />
        </div>
        <div className="form-input">
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={handleChange}
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
