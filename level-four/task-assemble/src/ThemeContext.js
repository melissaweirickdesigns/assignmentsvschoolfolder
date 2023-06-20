import React from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

    
    return (
    <ThemeContext.Provider value="">
        {props.children}
    </ThemeContext.Provider>  
    )

}

export {ThemeContext, ThemeContextProvider}