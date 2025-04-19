import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";

import { Stack } from "@fluentui/react"

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Stack>
        <h1>Senior Living Services</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
