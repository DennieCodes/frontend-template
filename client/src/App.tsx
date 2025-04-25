import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";

import { Stack } from "@fluentui/react"

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Stack verticalAlign="center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
