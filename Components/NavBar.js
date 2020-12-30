import React, { Component } from "react";
import CentreNavList from "./CentreNavList";
import NavIcons from "./NavIcons.js";
import RightNavList from "./RightNavList";
import RightNavigation from "./RightNavigation.js";

class NavBar extends Component {
  state = {
    iconList: [],
    buttonList: [],
  };

  getIcons = () => {
    CentreNavList().then((icon) => {
      this.setState({
        iconList: icon,
      });
    });
  };

  getButtons = () => {
    RightNavList().then((button) => {
      this.setState({
        buttonList: button,
      });
    });
  };

  componentDidMount() {
    this.getIcons();
    this.getButtons();
  }

  render() {
    return (
      <>
        <div className="navigationBar">
          <div className="leftNavigation">
            <div className="facebookLogo">
              <img
                alt="fbLogo."
                src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png"
              />
            </div>
            <div className="quickSearch">
              <form className="form">
                <input
                  className="input"
                  type="text"
                  name="query"
                  placeholder="&#xF002; Search Facebook"
                />
              </form>
            </div>
          </div>
          <div className="centreNavigation">
            <div className="iconList">
              {this.state.iconList.map(({ icon, iconId }) => (
                <NavIcons icon={icon} key={iconId} />
              ))}
            </div>
            <div className="menuIcon">
              <img
                alt="menuImg."
                src="https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/5.png"
              />
            </div>
          </div>
          <div className="rightNavigation">
            <div className="profile">
              <div className="profilePic">
                <img
                  alt="ppic"
                  src="https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/images/1.png"
                />
              </div>
              <div className="profileName">
                <h3>Gaurav</h3>
              </div>
            </div>
            <div className="buttonList">
              {this.state.buttonList.map(({ button, buttonId }) => (
                <RightNavigation button={button} key={buttonId} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
