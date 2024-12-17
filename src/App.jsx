import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Kundeklubben from "./pages/Kundeklubben";
import Products from "./pages/Products";
import Navigation from "./compoents/Navigation";
import Footer from "./compoents/footer/footer";
import Fragt from "./compoents/fragt/Fragt";
import ProductDetails from "./pages/produktdetails/produktdetails";
import Kurv from "./pages/Kurv";


function App() {

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "kurv", element: <Kurv/> },
    { path: "/products", element: <Products /> },
    { path: "/product/:id", element: <ProductDetails /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/kundeklubben", element: <Kundeklubben /> },
  ]);

  return (
    <div className="app">
      <Fragt/>
     <Navigation/>
      <div className="content">{routes}
        <Footer/>
      </div>
     
    </div>
  );
}

export default App
