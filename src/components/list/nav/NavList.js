import React from "react";
import styles from "./NavList.scss";

const mainMenu = [
  {
    name: "Home",
    url: "",
  },
  {
    name: "Company",
    url: "",
  },
  {
    name: "Web design",
    url: "",
  },
  {
    name: "Marketing digital",
    url: "",
  },
  {
    name: "Work",
    url: "",
  },
  {
    name: "Blog",
    url: "",
  },
  {
    name: "Prices",
    url: "",
  },
  {
    name: "Contact",
    url: "",
  },
];

export default function NavList() {
  return (
    <ul className={styles.itemList}>
      {mainMenu.map((item) => (
        <li key={item.name} className={styles.firstLevel}>
          {item.name}
          <a href={item.path}></a>
        </li>
      ))}
    </ul>
  );
}
