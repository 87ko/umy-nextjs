import { createContext, useState } from "react"

createContext

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [list, setList] = useState([])
    return (
        <AppContext.Provider value={[list, setList]}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)

export { AppProvider, useAppContext }
