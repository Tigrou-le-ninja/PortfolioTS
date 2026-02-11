import { useState } from "react";

import "./App.scss";
import Home from "./pages/home/home";

function App() {
  const theme = useState("dark");

  return (
    <div className="app" data-theme={theme}>
      <Home />
    </div>
  );
}

export default App;
