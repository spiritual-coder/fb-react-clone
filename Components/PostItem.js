import React, { Component } from "react";

class PostItem extends Component {
  render() {
    const { text, image } = this.props;
    return (
      <div className="postCard">
        <header className="postHead">
          <div className="profilePic">
            <img
              alt="profilepic"
              src="https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/images/1.png"
            />
          </div>
          <div className="profileName">
            <h3>Gaurav S Kaintura</h3>
          </div>
          <span className="threeDots">
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </span>
        </header>
        <div className="postContent">
          <p>{text}</p>
        </div>
        <div className="postImg">
          <img alt="postimg." src={image} />
        </div>
        <div className="actionTab">
          <div className="like">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span>Like</span>
          </div>
          <div className="comment">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span>Comment</span>
          </div>
          <div className="share">
            <i className="fa fa-share" aria-hidden="true"></i>
            <span>Share</span>
          </div>
          <div className="profile">
            <div className="abc">
              <img
                alt="profilepic"
                src="https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/images/1.png"
              />
            </div>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
