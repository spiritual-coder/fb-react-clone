import React, { Component } from "react";
import PostItem from "./PostItem.js";

class PostList extends Component {
  // state = {
  //   ata: [
  //     {
  //       text: "this is me",
  //       image:
  //         "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //     },
  //     {
  //       text: "its awesome",
  //       image:
  //         "https://images.pexels.com/photos/3150250/pexels-photo-3150250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     },
  //     {
  //       text: "kuchh bhi",
  //       image:
  //         "https://images.pexels.com/photos/1571855/pexels-photo-1571855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     },
  //   ],
  // };
  render() {
    const { passit } = this.props;
    // console.log(passit);
    // const { topost } = this.props;
    // const { ata } = this.state;
    // const { item } = this.state;
    // console.log(ata);
    return (
      <div className="postList">
        {passit
          .map((item, index) => {
            return <PostItem text={item.text} image={item.image} key={index} />;
          })
          .reverse()}
        {/* {topost.map((item, index) => {
          return <PostItem item={item.topost} key={index} />;
        })} */}
        {/* <PostItem text={item.text} image={item.image} /> */}
        {/* <PostItem
          text="Hi Devona here!"
          image="https://images.pexels.com/photos/3576433/pexels-photo-3576433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <PostItem
          text="It's Winter Time"
          image="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        /> */}
      </div>
    );
  }
}

export default PostList;
