import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorageHook';


export const useDarkMode = (key, initialValue) => {

    //initialValue: comes from Header.js is either going to be true or false

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
 

        if(darkMode === true) {
            document.querySelector('body').classList.add("dark-mode");
        } else {
            document.querySelector('body').classList.remove("dark-mode")
        }
       
    
     }, [darkMode])
        
        return [darkMode, setDarkMode]
        




};