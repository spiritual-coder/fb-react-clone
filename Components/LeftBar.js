import React, { Component } from "react";
import LeftNavList from "./LeftNavList";
import SidenavItems from "./SidenavItems.js";

class LeftBar extends Component {
  state = {
    itemList: [],
  };

  getItems = () => {
    LeftNavList().then((itemName) => {
      this.setState({
        itemList: itemName,
      });
    });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <>
        <div className="leftSidebar">
          <div className="navigationList">
            <div>
              {this.state.itemList.map(({ itemName, itemLink, itemId }) => (
                <SidenavItems
                  itemName={itemName}
                  itemLink={itemLink}
                  key={itemId}
                />
              ))}
            </div>
          </div>
          <div className="shortcuts">
            <header>
              <div className="headerTitle">
                <h2>Shortcuts</h2>
              </div>
            </header>
          </div>
        </div>
      </>
    );
  }
}

export default LeftBar;
