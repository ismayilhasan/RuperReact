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
import Dashboard from "./Pages/Dashboard";
import BrandsForm from "./Pages/BrandsForm";
import CreateBrand from "./Pages/BrandsForm/CreateBrand";
import UpdateBrand from "./Pages/BrandsForm/UpdateBrand";
import CategoriesForm from "./Pages/CategoriesForm";
import CreateCategory from "./Pages/CategoriesForm/CreateCategory";
import UpdateCategory from "./Pages/CategoriesForm/UpdateCategory";
import SubcategoriesForm from "./Pages/SubcategoiresForm";
import CreateSubCategory from "./Pages/SubcategoiresForm/CreateSubCategory";
import UpdateSubCategory from "./Pages/SubcategoiresForm/UpdateSubCategory";
import SliderForm from "./Pages/SliderForm";
import CreateSlider from "./Pages/SliderForm/CreateSlider";
import UpdateSlider from "./Pages/SliderForm/UpdateSlider";
import ColorsForm from "./Pages/Colors";
import UpdateColor from "./Pages/Colors/UpdateColor";
import CreateColor from "./Pages/Colors/CreateColor";
import ProductsForm from "./Pages/ProductsForm";
import CreateProduct from "./Pages/ProductsForm/CreateProduct";
import UpdateProduct from "./Pages/ProductsForm/UpdateProduct";
import ProductColor from "./Pages/ProductsForm/ProductColor";
import ProductColorImages from "./Pages/ProductsForm/ProductColorImages";
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
          <Route path="/admin" exact>
              <Dashboard/>
          </Route>
          <Route path="/admin/brands" exact>
              <BrandsForm/>
          </Route>
          <Route path="/admin/brands/create" exact>
            <CreateBrand/>
          </Route>
          <Route path="/admin/brands/update" exact>
            <UpdateBrand/>
          </Route>
          <Route path="/admin/category" exact>
            <CategoriesForm/>
          </Route>
          <Route path="/admin/category/create" exact>
            <CreateCategory/>
          </Route>
          <Route path="/admin/category/update" exact>
            <UpdateCategory/>
          </Route>
          <Route path="/admin/subcategory" exact>
            <SubcategoriesForm/>
          </Route>
          <Route path="/admin/subcategory/create" exact>
            <CreateSubCategory/>
          </Route>
          <Route path="/admin/subcategory/update" exact>
            <UpdateSubCategory/>
          </Route>
          <Route path="/admin/slider" exact>
            <SliderForm/>
          </Route>
          <Route path="/admin/slider/create" exact>
            <CreateSlider/>
          </Route>
          <Route path="/admin/slider/update" exact>
            <UpdateSlider/>
          </Route>
          <Route path="/admin/colors" exact>
            <ColorsForm/>
          </Route>
          <Route path="/admin/colors/create" exact>
            <CreateColor/>
          </Route>
          <Route path="/admin/colors/update" exact>
            <UpdateColor/>
          </Route>
          <Route path="/admin/products" exact>
            <ProductsForm/>
          </Route>
          <Route path="/admin/products/create" exact>
            <CreateProduct/>
          </Route>
          <Route path="/admin/products/update" exact>
            <UpdateProduct/>
          </Route>
          <Route path="/admin/productsColor" exact>
            <ProductColor/>
          </Route>
          <Route path="/admin/productsColorImage" exact>
            <ProductColorImages/>
          </Route>
        </Switch>
        <Footer/>
      </AppProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
