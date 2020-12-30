import React, { Component } from "react";

class StoryList extends Component {
  render() {
    return (
      <div className="storyList">
        <div className="storyCard">
          <div className="storyContent">
            {/* <div className="storyProfile">
              <img
                alt="profile."
                src="https://randomuser.me/api/portraits/women/39.jpg"
              />
            </div> */}
            <div className="storyImg">
              <img
                alt="story"
                src="https://images.pexels.com/photos/5117800/pexels-photo-5117800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
        </div>

        <div className="storyCard">
          <div className="storyContent">
            <div className="storyImg">
              <img
                alt="story"
                src="https://images.pexels.com/photos/5627494/pexels-photo-5627494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
        </div>

        <div className="storyCard">
          <div className="storyContent">
            <div className="storyImg">
              <img
                alt="story"
                src="https://images.pexels.com/photos/4131522/pexels-photo-4131522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
        </div>

        <div className="storyCard">
          <div className="storyContent">
            <div className="storyImg">
              <img
                alt="story"
                src="https://images.pexels.com/photos/3576433/pexels-photo-3576433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
        </div>

        <div className="storyCard">
          <div className="storyContent">
            <div className="storyImg">
              <img
                alt="story"
                src="https://images.pexels.com/photos/5478104/pexels-photo-5478104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryList;
