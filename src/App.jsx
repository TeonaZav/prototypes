import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/UI/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import Section6 from "./components/sections/Section6";
import Section7 from "./components/sections/Section7";

function App() {
  return (
    <>
      <Header />
      <div className="mt-5">
        <Router>
          <div className="d-flex">
            <Sidebar />
            <div className="content p-4">
              <Routes>
                <Route path="/" element={<Navigate to="/section1" replace />} />
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
