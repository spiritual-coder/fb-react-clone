import React, { Component } from "react";

class StoryItem extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className="storyCard">
        <div className="storyContent">
          {/* <div className="storyProfile">
              <img
                alt="profile."
                src="https://randomuser.me/api/portraits/women/39.jpg"
              />
            </div> */}
          <div className="storyImg">
            <img alt="story" src={card} />
          </div>
        </div>
      </div>
    );
  }
}

export default StoryItem;
