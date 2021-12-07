import React from "react";
import styles from "./BaseLayout.scss";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function BaseLayout() {
  return (
    <main className={styles.layoutFrame}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
