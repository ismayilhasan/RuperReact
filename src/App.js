import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./context/App";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Wishlist from "./Pages/Wishlist";
import ShoppingCart from "./Pages/ShoppingCart";
import { QueryClientProvider,QueryClient} from "react-query";
import AboutUs from "./Pages/AboutUs";
// import Shop from "./Pages/Shop";
function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/shop" exact>
            <Shop/>
          </Route>
          <Route path="/details" exact>
            <ProductDetail/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/register" exact>
            <Register/>
          </Route>
          <Route path="/shop/wishlist" exact>
              <Wishlist/>
          </Route>
          <Route path="/shop/shop-cart" exact>
                <ShoppingCart/>
          </Route>
          <Route path="/about-us" exact>
                <AboutUs/>
          </Route>
        </Switch>
        <Footer/>
      </AppProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
