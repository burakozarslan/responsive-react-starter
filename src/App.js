import React, { Fragment } from "react";
import GlobalStyle from "./theme/globalStyle";
import Theme from "./theme/theme";
import device from "./theme/device";

export default function App() {
  return (
    <Fragment>
      <Theme>
        <GlobalStyle />
		<h1>React Starter</h1>
      </Theme>
    </Fragment>
  );
}
