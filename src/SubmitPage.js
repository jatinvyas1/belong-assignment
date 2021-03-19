import React from "react";
import { TitleText } from "./staticComponents";
import { BACKGROUND, DARK_BLUE, GREY } from "./constants";
import { useDispatch } from "react-redux";

function SubmitPage({ index, setSubmit }) {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    setSubmit(false);
    dispatch({ type: "SUBMIT", payload: { index: index } });
  };
  const styles = {
    programView: {
      boxSizing: "border-box",
      padding: "3rem 1rem 0 4rem",
      display: "flex",
      flexDirection: "column",
      width: "85%",
      textAlign: "center",
    },
    dropArea: {
      marginTop: "2rem",
      border: `2px dashed ${GREY}`,
      height: "5rem",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      color: { GREY },
    },
  };
  return (
    <div style={styles.programView}>
      <TitleText>Submit your Task</TitleText>
      <div style={styles.dropArea}>
        <div id="filedrag" style={{ color: { GREY } }}>
          Drop you files or{" "}
        </div>
        <input
          type="file"
          id="fileselect"
          name="browse"
          multiple="multiple"
          style={{
            backgroundColor: { BACKGROUND },
            border: "none",
            color: { DARK_BLUE },
            textddcoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
          }}
        />
        <span style={{ color: { GREY } }}>{"to upload."}</span>
      </div>
      <div id="submitbutton">
        <button
          style={{
            backgroundColor: { BACKGROUND },
            border: "none",
            color: { DARK_BLUE },
            textddcoration: "none",
            display: "inline-block",
            fontSize: "14px",
            margin: "4px 2px",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Upload Files
        </button>
      </div>
    </div>
  );
}

export default SubmitPage;
