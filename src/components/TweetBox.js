import React from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';

const TweetBox = () => {
  return (
    <div className="tweetBox.css">
      <h1>TweetBox</h1>
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-pro" />
          <input type="text" placeholder="What's happening?" />
          {/*<input type="text" placeholder="Enter image URL" />*/}
        </div>
      </form>
      <Button>Tweet</Button>
    </div>
  );
};

export default TweetBox;
