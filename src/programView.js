import React from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import { ProgramText, List } from "./staticComponents";

function ProgramView(props) {
  const styles = {
    programView: {
      boxSizing: "border-box",
      padding: "3rem 1rem 0 4rem",
      display: "flex",
      flexDirection: "column",
      width: "550px",
    },
    img: {
      width: "550px",
    },
  };
  return (
    <div style={styles.programView}>
      <img style={styles.img} src={props.item} alt="" />

      {typeof props.item !== "string" &&
        props.item?.map((text) => {
          if (typeof text === "object") {
            return <List points={text} />;
          } else
            return (
              <>
                <ProgramText>{text}</ProgramText>
              </>
            );
        })}
    </div>
  );
}

export default ProgramView;
