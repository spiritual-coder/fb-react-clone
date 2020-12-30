import React, { Component } from "react";
import Form from "./Form.js";
import StoryList from "./StoryList.js";
import PostList from "./PostList.js";

class Center extends Component {
  state = {
    data: [
      { topost: "I am learning Data Structures." },
      { topost: "My First Post" },
    ],
  };

  handleSubmit = (newVal) => {
    this.setState({ data: [...this.state.data, newVal] });
  };

  //localStorage

  componentDidUpdate() {
    localStorage.setItem("dataStore", JSON.stringify(this.state.data));
  }

  componentDidMount() {
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    if (dataStore !== null) {
      this.setState({ data: dataStore });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="centerContent">
          <StoryList />
          <Form onSubmit={this.handleSubmit} />
          <PostList topost={data} />
        </div>
      </>
    );
  }
}

export default Center;
