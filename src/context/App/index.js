import React from 'react';

const AppContext = React.createContext([]);

function AppProvider({ children }) {
  const [sidebar, setSidebar] = React.useState(false);
  const [headerUsername,setHeaderUsername] = React.useState(null)
  const [searchbar, setSearchbar] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [wishlistCart, setWishlistCart] = React.useState([]);
  const [productCartCount,setProductCartCount] = React.useState({0:1})
  const [user,setUser] = React.useState({
    FirstName:"",
    LastName:"",
    Username:"",
    Email : "",
    Password : ""
  })
 

  React.useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedCartWishlistCart = localStorage.getItem('wishlistcart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    if (storedCartWishlistCart) {
      setWishlistCart(JSON.parse(storedCartWishlistCart));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlistcart', JSON.stringify(wishlistCart));
  }, [cart, wishlistCart]);

  const toggleSidebar = () => {
    setSidebar(prevState => !prevState);
  };

  const toggleSearchbar = () => {
    setSearchbar(prevState => !prevState);
  };

  const addToCart = (item) => {
    let productExists = false;
    const newCart = cart.map((existingItem) => {
      if (existingItem.id === item.id) {
        productExists = true;
        return { ...existingItem, count: existingItem.count + 1 };
      }
      return existingItem;
    });
    if (!productExists) {
      setCart([...newCart, { ...item, count: 1 }]);
    } else {
      setCart(newCart);
    }
  };

  const addToWishlist = (item) => {
    setWishlistCart([...wishlistCart, item]);
  };

  return (
    <AppContext.Provider value={[{ sidebar, toggleSidebar, addToCart, cart,setCart, addToWishlist,
      wishlistCart, setWishlistCart, searchbar, toggleSearchbar,user,setUser,productCartCount,setProductCartCount
      ,headerUsername,setHeaderUsername }]}>
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const appContext = React.useContext(AppContext);
  return appContext;
};

export { useAppContext, AppProvider };