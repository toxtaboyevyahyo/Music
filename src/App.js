import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Services from "./components/Services";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Section" element={<Section />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
