import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Report from "./components/Report";
import Design from "./components/Design";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search-page" element={<Search />} />
        <Route path="/report-page" element={<Report />} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact-us" element={<ContactUs />} />
       
       
      </Routes>
    </div>
  );
}

export default App;
