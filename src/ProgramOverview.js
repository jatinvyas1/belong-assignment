import React, { useState } from "react";
import { TitleText } from "./staticComponents";
import { BACKGROUND } from "./constants";
import { useSelector } from "react-redux";
import Program from "./Programs";
function ProgramOverview() {
  const programData = useSelector((state) => state);
  const styles = {
    programOverview: {
      width: "30%",
      backgroundColor: "white",
      borderRadius: "24px",
      minHeight: "616px",
      boxSizing: "border-box",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    partition: {
      width: "100%",
      color: BACKGROUND,
      margin: "1rem 0",
    },
  };
  return (
    <div style={styles.programOverview}>
      <TitleText>Program Overview:</TitleText>
      <hr style={styles.partition} />
      {programData.map((program, index) => {
        return (
          <Program
            title={program.name}
            index={index + 1}
            inProgress={program.inProgress}
          />
        );
      })}
    </div>
  );
}

export default ProgramOverview;
