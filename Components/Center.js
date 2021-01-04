import React, { Component } from "react";
import Form from "./Form.js";
import StoryForm from "./StoryForm.js";
import StoryList from "./StoryList.js";
import PostList from "./PostList.js";

class Center extends Component {
  state = {
    data: [
      {
        text: "Happy New Year!",
        image:
          "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ],

    story: [
      {
        toadd:
          "https://images.pexels.com/photos/5627494/pexels-photo-5627494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        toadd:
          "https://images.pexels.com/photos/4131522/pexels-photo-4131522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    ],
  };

  handleSubmit = (newVal) => {
    this.setState({ data: [...this.state.data, newVal] });
  };

  handleSubmitValue = (newValue) => {
    this.setState({ story: [...this.state.story, newValue] });
  };

  //localStorage

  componentDidUpdate() {
    localStorage.setItem("dataStore", JSON.stringify(this.state.data));
    localStorage.setItem("storyStore", JSON.stringify(this.state.story));
  }

  componentDidMount() {
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    if (dataStore !== null) {
      this.setState({ data: dataStore });
    }
    const storyStore = JSON.parse(localStorage.getItem("storyStore"));
    if (storyStore !== null) {
      this.setState({ story: storyStore });
    }
  }

  render() {
    const { data, story } = this.state;
    return (
      <>
        <div className="centerContent">
          <div className="storyTab">
            <StoryForm onSubmit={this.handleSubmitValue} />
            <StoryList toadd={story} />
          </div>

          <Form onSubmit={this.handleSubmit} />
          <PostList passit={data} />
        </div>
      </>
    );
  }
}

export default Center;
