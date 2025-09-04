// App.tsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landingpage/landing";
import Preloader from "./pages/landingpage/component/preloader";
import Navbar from "./pages/landingpage/component/navbar";
import Footer from "./pages/landingpage/component/footer";
import ScrollTop from "./pages/landingpage/component/scrolltop";
import TodoPage from "./pages/todo";

// Common components




function App() {
  return (
    <Router>
      <Preloader />
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>

      <Footer />
      <ScrollTop />
    </Router>
  );
}

export default App;
