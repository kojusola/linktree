import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LinksComponent from "./pages/LinksComponent";
import CreateLinktree from "./pages/CreateLinktree";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/linktree/:id' element={<LinksComponent />} />
          <Route path='/createlinktree' element={<CreateLinktree />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
