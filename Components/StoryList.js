import React, { Component } from "react";
import StoryItem from "./StoryItem.js";

class StoryList extends Component {
  // state = {
  //   story: [
  //     {
  //       toadd:
  //         "https://images.pexels.com/photos/5117800/pexels-photo-5117800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     },
  //     {
  //       toadd:
  //         "https://images.pexels.com/photos/5627494/pexels-photo-5627494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     },
  //     {
  //       toadd:
  //         "https://images.pexels.com/photos/4131522/pexels-photo-4131522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     },
  //   ],
  // };
  render() {
    // const { story } = this.state;
    const { toadd } = this.props;

    return (
      <div className="storyList">
        {toadd.map((card, index) => {
          return <StoryItem card={card.toadd} key={index} />;
        })}
      </div>
    );
  }
}

export default StoryList;
