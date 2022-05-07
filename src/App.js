import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Nav from "./components/App/nav";
import Book from "./pages/Book/Book";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/:id/:id" element={<Book />} />
      </Routes>
      <Nav />
    </Router>
  );
}

export default App;
