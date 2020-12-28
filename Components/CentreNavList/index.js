const mainNavIcons = [
  {
    icon:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/1b.png",
    iconId: "000061",
  },
  {
    icon:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/2.png",
    iconId: "000062",
  },
  {
    icon:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/3.png",
    itemId: "000063",
  },
  {
    icon:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/4.png",
    iconId: "000064",
  },
];
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (n = 4) => Promise.resolve(mainNavIcons);
