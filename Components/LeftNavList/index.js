const sidenavigationList = [
  {
    itemName: "Gaurav S Kaintura",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/images/1.png",
    itemId: "000001",
  },
  {
    itemName: "COVID-19 Information Centre",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/13.png",
    itemId: "000002",
  },
  {
    itemName: "Messenger",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/14.png",
    itemId: "000003",
  },
  {
    itemName: "Friends",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/15.png",
    itemId: "000004",
  },
  {
    itemName: "Groups",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/16.png",
    itemId: "000005",
  },
  {
    itemName: "Events",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/17.png",
    itemId: "000006",
  },
  {
    itemName: "Memories",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/18.png",
    itemId: "000007",
  },
  {
    itemName: "Saved",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/19.png",
    itemId: "000008",
  },
  {
    itemName: "Pages",
    itemLink:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/20.png",
    itemId: "000009",
  },
];
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (n = 9) =>
  Promise.resolve(
    sidenavigationList.sort(() => 0.9 - Math.random()).slice(0, n)
  );
