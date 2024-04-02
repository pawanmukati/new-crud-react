import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import NoPage from "../Pages/NoPage";
import CreateUsers from './Components/CreateUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/createUsers" element={<CreateUsers />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
