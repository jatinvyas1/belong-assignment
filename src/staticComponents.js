import { FONT_COLOR, LIGHT_BLUE } from "./constants";

export const LightText = (props) => {
  const styles = {
    fontWeight: 400,
    fontSize: 16,
    color: FONT_COLOR,
  };
  return <div style={styles}>{props.children}</div>;
};

export const TitleText = (props) => {
  const styles = {
    fontWeight: 500,
    fontSize: 18,
    color: FONT_COLOR,
    width: "100%",
  };
  return <div style={styles}>{props.children}</div>;
};

export const NavLink = ({ isActive = false, ...props }) => {
  const styles = {
    root: {
      padding: "0.75rem 0 0.75rem 0.5rem",
      width: "100%",
      background: isActive ? LIGHT_BLUE : "#fffff",
      display: "flex",
      cursor: "pointer",
    },
    icon: {
      color: FONT_COLOR,
      height: "18px",
      margin: "0 1rem",
    },
  };

  return (
    <div style={styles.root}>
      {<props.icon style={styles.icon} />}
      <LightText>{props.children}</LightText>
    </div>
  );
};

export const SecondaryCardText = (props) => {
  const styles = {
    root: {
      color: FONT_COLOR,
      fontSize: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.root}>
      {<props.icon style={styles.icon} />}
      {"  "} {props.children}
    </div>
  );
};

export const ProgramText = (props) => {
  const styles = {
    fontSize: "14px",
    fontWeight: "normal",
    margin: "1rem",
  };
  return <div style={styles}>{props.children}</div>;
};

export const List = ({ points }) => {
  const styles = {
    fontSize: "14px",
    fontWeight: "normal",
    margin: "1rem",
  };
  return (
    <ul style={styles}>
      {points.map((point) => (
        <li>{point}</li>
      ))}
    </ul>
  );
};
