import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Nav from "./components/App/nav";
import Book from "./pages/Book/Book";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/:id/:id" element={<Book />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Nav />
    </Router>
  );
}

export default App;
