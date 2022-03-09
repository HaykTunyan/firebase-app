import { Fragment } from "react";
import HeaderComponent from "../components/header";
import { Router } from "../router";

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <Router />
    </Fragment>
  );
}

export default App;
