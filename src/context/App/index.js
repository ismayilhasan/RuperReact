import React from 'react'
import { cardService } from '../../APIs/Services/CardService';

const AppContex = React.createContext([])

function AppProvider({children}) {
  const [sidebar,setSidebar] = React.useState(false)
  const [cart,setCart] = React.useState([])

 

  React.useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const toggleSidebar = () => {
    setSidebar((prevstate) => !prevstate)
  }
  const addToCart = (item) => {
    setCart([...cart, item]);
  
  };

  return (
    <AppContex.Provider value={[{sidebar,toggleSidebar,addToCart,cart}]}>
      {children}
    </AppContex.Provider>
  )
}

const useAppContext = () => {
  const appContext = React.useContext(AppContex)
  return appContext;
}

export  {useAppContext,AppProvider};