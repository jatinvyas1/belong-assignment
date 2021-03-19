import React from "react";
import { SecondaryCardText, TitleText } from "./staticComponents";
import { GiArchiveResearch } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { DARK_BLUE, LIGHT_BLUE } from "./constants";
function Program({ title, index, inProgress }) {

  const styles = {
    program: {
      width: "90%",
      boxShadow: " 0px 0px 4px 0px rgba(0,0,18,0.38)",
      height: "4.5rem",
      borderRadius: "12px",
      display: "flex",
      margin: "1rem 0 ",
      cursor: "pointer",
    },
    index: {
      height: "100%",
      width: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: inProgress ? DARK_BLUE : LIGHT_BLUE,
      borderRadius: "12px",
      color: "white",
      fontSize: "20px ",
    },
    programContent: {
      margin: "0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "80%",
    },
  };
  return (
    <div style={styles.program}>
      <div style={styles.index}>{index}</div>
      <div style={styles.programContent}>
        <TitleText>{title}</TitleText>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SecondaryCardText icon={GiArchiveResearch}>
            Research
          </SecondaryCardText>
          <SecondaryCardText icon={AiOutlineClockCircle}>
            Self Paced
          </SecondaryCardText>
        </div>
      </div>
    </div>
  );
}

export default Program;
