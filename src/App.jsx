import { Nav, Footer } from "@components";
import { Home, Contact, Projects } from "@pages";
import { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
