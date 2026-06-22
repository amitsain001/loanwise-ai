import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Navbar from "/src/components/Navbar/Navbar";
import Footer from "/src/components/Footer/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar/>

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/compare"
            element={<Compare />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          
        </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;