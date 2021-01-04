import React, { Component } from "react";

class Form extends Component {
  inputValue = {
    text: "",
    image: "",
  };
  state = this.inputValue;

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { text, image } = this.state;
    return (
      <div className="addPost">
        <form onSubmit={this.handleOnSubmit}>
          <div className="postRow">
            <div className="profilePic">
              <img
                alt="profilepic"
                src="https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/images/1.png"
              />
            </div>
            <div className="writePost">
              <input
                autoComplete="off"
                type="text"
                name="text"
                className="textInput"
                id="text"
                value={text}
                onChange={this.handleInput}
                placeholder="What's on your mind, Gaurav?"
                required
              />
            </div>
          </div>
          <div className="rowTwo">
            <input
              autoComplete="off"
              className="imageInput"
              type="text"
              name="image"
              id="addimage"
              value={image}
              onChange={this.handleInput}
              placeholder="Enter image url"
            />
            <div className="postButton">
              <button type="submit">Create Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
