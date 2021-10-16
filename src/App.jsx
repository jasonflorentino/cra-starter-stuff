// Library Imports
import { useState } from "react";
import { createUseStyles } from "react-jss";

// Local Imports
import Header from "./components/Header";

// Constants
const useStyles = createUseStyles(getStyles());

//
// Component
//
function App() {
  const classes = useStyles();
  const [ready, setReady] = useState(false);
  
  return (
    <div className={classes.App}>
      <Header
        ready={ready}
        setReady={setReady}
      />
    </div>
  );
}

//
// Styles
//
function getStyles() {
  return {
    App: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "1rem",
      alignItems: "center",
      backgroundColor: "black",
      color: "white",
    },
  };
}

// Exports
export default App;
