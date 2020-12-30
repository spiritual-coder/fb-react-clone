import React, { Component } from "react";
import ContactsList from "./ContactsList";
import OnlineContacts from "./OnlineContacts.js";

class RightBar extends Component {
  state = {
    onlineList: [],
  };

  getProfiles = () => {
    ContactsList().then((contactsName) => {
      this.setState({
        onlineList: contactsName,
      });
    });
  };

  componentDidMount() {
    this.getProfiles();
  }

  render() {
    return (
      <>
        <div className="rightSidebar">
          <div className="notifications">
            <header>
              <div className="headerTitle">
                <h2>Birthdays</h2>
              </div>
            </header>
            <div className="notificationContent">
              <img
                alt="giftimg"
                src="https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/22.png"
              />
              <h3>
                <span>Vikram and 3 others</span> have birthdays today
              </h3>
            </div>
          </div>
          <div className="contacts">
            <header>
              <div className="headerTitle">
                <h2>Contacts</h2>
              </div>
              <div className="headerIcons">
                <i className="fa fa-video-camera" aria-hidden="true"></i>
                <i className="fa fa-search" aria-hidden="true"></i>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </div>
            </header>
            <div>
              {this.state.onlineList.map(
                ({ contactsName, contactsImage, personId }) => (
                  <OnlineContacts
                    contactsName={contactsName}
                    contactsImage={contactsImage}
                    key={personId}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RightBar;
