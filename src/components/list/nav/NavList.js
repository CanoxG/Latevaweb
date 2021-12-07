import React from "react";
import styles from "./NavList.scss";
import { Link } from "react-router-dom";

const mainMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Company",
    url: "/company",
  },
  {
    name: "Web design",
    url: "/web-design",
  },
  {
    name: "Marketing digital",
    url: "/marketing-digital",
  },
  {
    name: "Work",
    url: "/work",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Prices",
    url: "/price",
  },
  {
    name: "Contact",
    url: "/content",
  },
];

export default function NavList() {
  return (
    <ul className={styles.itemList}>
      {mainMenu.map((item) => (
        <li key={item.name} className={styles.firstLevel}>
          <Link to={item.url}> {item.name} </Link>
        </li>
      ))}
    </ul>
  );
}

