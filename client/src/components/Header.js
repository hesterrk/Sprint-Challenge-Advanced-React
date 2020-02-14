import React from "react"
import { useDarkMode } from "./hooks/useDarkMode";



 const Header = () => {


const [darkMode, setDarkMode] = useDarkMode('dark', false)

const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


return (

    <div data-testid="wrapper"className="headerWrapper">

<button onClick={toggleDarkMode}> Browse in Dark Mode! </button>

</div>

);

}

export default Header