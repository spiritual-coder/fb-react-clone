const onlinePerson = [
  {
    contactsName: "Juber Rashik",
    contactsImage: "https://randomuser.me/api/portraits/men/15.jpg",
    personId: "00001",
  },
  {
    contactsName: "Gorden Smith",
    contactsImage: "https://randomuser.me/api/portraits/men/34.jpg",
    personId: "00002",
  },
  {
    contactsName: "Nick Fray",
    contactsImage: "https://randomuser.me/api/portraits/men/92.jpg",
    personId: "00003",
  },
  {
    contactsName: "Akbar Qadri",
    contactsImage: "https://randomuser.me/api/portraits/men/23.jpg",
    personId: "00004",
  },
  {
    contactsName: "Chung Lu",
    contactsImage: "https://randomuser.me/api/portraits/women/60.jpg",
    personId: "00005",
  },
  {
    contactsName: "Jennifer Scarlet",
    contactsImage: "https://randomuser.me/api/portraits/women/31.jpg",
    personId: "00006",
  },
  {
    contactsName: "John Green",
    contactsImage: "https://randomuser.me/api/portraits/men/15.jpg",
    personId: "00007",
  },
  {
    contactsName: "Natasha Jokovich",
    contactsImage: "https://randomuser.me/api/portraits/women/18.jpg",
    personId: "00008",
  },
  {
    contactsName: "Surender Mehta",
    contactsImage: "https://randomuser.me/api/portraits/men/17.jpg",
    personId: "00009",
  },
  {
    contactsName: "Devi",
    contactsImage: "https://randomuser.me/api/portraits/women/50.jpg",
    personId: "000010",
  },
  {
    contactsName: "Mohan Jha",
    contactsImage: "https://randomuser.me/api/portraits/men/61.jpg",
    personId: "000011",
  },
  {
    contactsName: "David Malccom",
    contactsImage: "https://randomuser.me/api/portraits/men/11.jpg",
    personId: "000012",
  },
  {
    contactsName: "Mark Microsoft",
    contactsImage: "https://randomuser.me/api/portraits/men/41.jpg",
    personId: "00013",
  },
  {
    contactsName: "Kevin Fosphorus",
    contactsImage: "https://randomuser.me/api/portraits/men/91.jpg",
    personId: "00014",
  },
  {
    contactsName: "Angelina Thomas",
    contactsImage: "https://randomuser.me/api/portraits/women/71.jpg",
    personId: "00015",
  },
  {
    contactsName: "Samantha Dass",
    contactsImage: "https://randomuser.me/api/portraits/women/39.jpg",
    personId: "00016",
  },
  {
    contactsName: "Oliver Rasolnikov",
    contactsImage: "https://randomuser.me/api/portraits/men/84.jpg",
    personId: "00017",
  },
  {
    contactsName: "Jay Patel",
    contactsImage: "https://randomuser.me/api/portraits/men/75.jpg",
    personId: "00018",
  },
];
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (n = 9) =>
  Promise.resolve(onlinePerson.sort(() => 0.9 - Math.random()).slice(0, n));
