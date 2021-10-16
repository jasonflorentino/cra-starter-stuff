// Imports
import { createUseStyles } from "react-jss";

// Constants
const useStyles = createUseStyles(getStyles());

//
// Component
//
const Header = ({ ready, setReady }) => {
  const classes = useStyles();

  return (
    <div className={classes.HeaderContainer}>
      <h1>New React Project</h1>
      <button 
        className={classes.button}
        onClick={() => setReady(!ready)}
      >
        {!ready ? "Ready?" : "I'm not ready!"}
      </button>
    </div>
  );
};

//
// Styles
//
function getStyles() {
  return {
    HeaderContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    button: {
      height: "5rem",
      padding: "1rem",
      margin: ".5rem",
      borderRadius: ".5rem",
      border: "2px dashed white",
      background: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      "&:disabled": {
        border: "2px dashed grey",
        cursor: "not-allowed",
      },
      "&:disabled:hover": {
        border: "2px dashed grey",
        cursor: "not-allowed",
      },
      "&:hover": {
        border: "2px solid white",
        cursor: "pointer",
      },
    },
  };
}

// Exports
export default Header;
