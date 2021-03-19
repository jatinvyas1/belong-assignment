import React from "react";
import { BACKGROUND, GREY } from "./constants";
import Navbar from "./Navbar";
import ProgramNav from "./programNav";
import ProgramOverview from "./ProgramOverview";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  dashboard: {
    width: "80%",
    backgroundColor: BACKGROUND,
    borderRadius: "32px",
    boxSizing: "border-box",
    padding: "1.5rem",
    minHeight: "650px",
    display: "flex",
    alignItems: "space-between",
  },
};

function Layout() {
  return (
    <div style={styles.root}>
      <Navbar />
      <div style={styles.dashboard}>
        <ProgramOverview />
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProgramNav />
        </div>
      </div>
    </div>
  );
}

export default Layout;
