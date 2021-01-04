import React, { Component } from "react";

class StoryForm extends Component {
  inputStoryValue = {
    toadd: "",
  };
  state = this.inputStoryValue;

  handleStoryInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmitValue = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { toadd } = this.state;
    return (
      <div>
        <div className="storyCard">
          <form className="storyForm" onSubmit={this.handleOnSubmitValue}>
            <input
              className="storyUrl"
              autoComplete="off"
              name="toadd"
              id="toadd"
              value={toadd}
              onChange={this.handleStoryInput}
              type="text"
              placeholder="Enter URL"
              required
            />
            <div className="storyButton">
              <button type="submit">Add</button>
            </div>
          </form>
          {/* <div className="storyContent">
            <form>
              <input type="text" />
            </form>
            <div className="storyImg">
              <img
                alt="story"
                src="https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/images/2.jpg"
              />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default StoryForm;
