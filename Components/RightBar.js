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
          </div>
          <div className="contacts">
            <header>
              <div className="headerTitle">
                <h2>Contacts</h2>
              </div>
              <div className="headerIcons"></div>
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
