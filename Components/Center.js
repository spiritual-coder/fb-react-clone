import React, { Component } from "react";

class Center extends Component {
  render() {
    return (
      <>
        <div className="centerContent">
          <div className="addPost">
            <form>
              <input type="text" required />
              <button type="submit">Post</button>
            </form>
          </div>

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
            </header>
            <div className="postContent">
              <p>lorem Ipsum Do re La Ti</p>
            </div>
            <div className="postImg"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Center;
