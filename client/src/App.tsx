import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";

import { Stack } from "@fluentui/react"

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Stack verticalAlign="center">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;
