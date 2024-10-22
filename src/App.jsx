import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Update from "./pages/Update";
import View from "./pages/View";


function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/view/:id" element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
