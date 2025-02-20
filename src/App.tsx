import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* This is the default child route */}
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
