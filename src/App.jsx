import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";

function App() {
  return (
    <>
      <Header />
      <div className="my-2">
        <Router>
          <div className="d-flex">
            <Sidebar />
            <div className="content p-4">
              <Routes>
                <Route path="/section1" element={<Section1 />} />
                <Route path="/section2" element={<Section2 />} />
                <Route path="/section3" element={<Section3 />} />
                <Route path="/section4" element={<Section4 />} />
                <Route path="/section5" element={<Section5 />} />
                <Route path="/section6" element={<Section6 />} />
                <Route path="/section7" element={<Section7 />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
