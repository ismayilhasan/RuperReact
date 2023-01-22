import React from 'react'
import { cardService } from '../../APIs/Services/CardService';

const AppContex = React.createContext([])

function AppProvider({children}) {
  const [sidebar,setSidebar] = React.useState(false)

  
  const toggleSidebar = () => {
    setSidebar((prevstate) => !prevstate)
  }
    // React.useEffect(() => {
    //   cardService.getAllPosts().then(({data:userData}) => {
    //     setPosts(userData)
    //   })
    // },[])
  return (
    <AppContex.Provider value={[{sidebar,toggleSidebar}]}>
      {children}
    </AppContex.Provider>
  )
}

const useAppContext = () => {
  const appContext = React.useContext(AppContex)
  return appContext;
}

export  {useAppContext,AppProvider};