import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Login/Register/Register";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/Shared/NotFound/NotFound";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import Inventory from "./components/Inventory/Inventory";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
}

export default App;
