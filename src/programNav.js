import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { GREY, DARK_BLUE } from "./constants";
import ProgramView from "./programView";
import SubmitPage from "./SubmitPage";
function ProgramNav() {
  const currentIndex = useRef(0);
  const programNavdata = useSelector((state) =>
    state.filter((current, index) => {
      if (current.inProgress === true) {
        currentIndex.current = index;
      }
      return current.inProgress === true;
    })
  );
  console.log(programNavdata);
  const [currentView, setCurrentView] = useState("video");
  const [submit, setSubmit] = useState(false);
  const styles = {
    root: {
      display: "flex",
      flexDirection: "cloumn",
      justifyContent: "center",
    },
    programNav: {
      display: "flex",
      padding: "3rem 3rem 0 4rem",
      height: "5rem",
    },
    programNavlink: {
      borderBottom: `8px solid ${GREY}`,
      padding: "1rem 1.5rem ",
      cursor: "pointer",
    },
    active: {
      borderBottom: `8px solid ${DARK_BLUE}`,
      padding: "1rem 1.5rem ",
      cursor: "pointer",
    },
  };
  return (
    <div>
      <div style={styles.programNav}>
        <div
          style={
            currentView === "video" ? styles.active : styles.programNavlink
          }
          onClick={() => {
            setSubmit(false);
            setCurrentView("video");
          }}
        >
          Mentor Video
        </div>
        <div
          style={
            currentView === "information"
              ? styles.active
              : styles.programNavlink
          }
          onClick={() => {
            setSubmit(false);
            setCurrentView("information");
          }}
        >
          Information
        </div>
        <div
          style={currentView === "task" ? styles.active : styles.programNavlink}
          onClick={() => {
            setSubmit(false);
            setCurrentView("task");
          }}
        >
          Task
        </div>
        <div
          style={
            currentView === "resources" ? styles.active : styles.programNavlink
          }
          onClick={() => {
            setSubmit(false);
            setCurrentView("resources");
          }}
        >
          Resources
        </div>
        <div
          style={submit ? styles.active : styles.programNavlink}
          onClick={() => {
            setSubmit(true);
            setCurrentView("");
          }}
        >
          Submission
        </div>
      </div>
      {submit ? (
        <SubmitPage index={currentIndex.current} setSubmit={setSubmit} />
      ) : (
        <ProgramView item={programNavdata[0][currentView]} />
      )}
    </div>
  );
}

export default ProgramNav;
