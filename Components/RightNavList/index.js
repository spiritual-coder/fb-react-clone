const NavButtons = [
  {
    button:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/23.png",
    buttonId: "01",
  },
  {
    button:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/24.png",
    buttonId: "02",
  },
  {
    button:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/25.png",
    buttonId: "03",
  },
  {
    button:
      "https://raw.githubusercontent.com/spiritual-coder/fb-react-clone/main/assets/icons/26.png",
    buttonId: "04",
  },
];
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (n = 4) => Promise.resolve(NavButtons);
