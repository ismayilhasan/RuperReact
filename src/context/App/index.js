import React from 'react'

const AppContex = React.createContext([])

function AppProvider({children}) {
  const [sidebar,setSidebar] = React.useState(false)
  const [cart,setCart] = React.useState([])
  const [wishlistCart,setWishlistCart] = React.useState([])
 

  React.useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedCartWishlistCart = localStorage.getItem('wishlistcart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    if(storedCartWishlistCart)
    {
      setWishlistCart(JSON.parse(storedCartWishlistCart));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlistcart', JSON.stringify(wishlistCart));
  }, [cart,wishlistCart]);
  
  const toggleSidebar = () => {
    setSidebar((prevstate) => !prevstate)
  }
  const addToCart = (item) => {
    setCart([...cart, item]);
  
  };

  const addToWishlist = (item) => {
    setWishlistCart([...wishlistCart,item])
  }

  return (
    <AppContex.Provider value={[{sidebar,toggleSidebar,addToCart,cart,addToWishlist,
    wishlistCart,setWishlistCart}]}>
      {children}
    </AppContex.Provider>
  )
}

const useAppContext = () => {
  const appContext = React.useContext(AppContex)
  return appContext;
}

export  {useAppContext,AppProvider};