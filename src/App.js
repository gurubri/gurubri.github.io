import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Layout from "./Layout";
import Contact from "./contact";
import About from "./about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
