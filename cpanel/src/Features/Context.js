import React, { useContext, useRef, useState } from "react";
const AppContext=React.createContext();
const API_URL = import.meta.env.VITE_API_BASE_URL;


const AppProvider=({children})=>{
    let SidebarRef=useRef();
    const[data,setdata]=useState();
    
    return<AppContext.Provider value={{SidebarRef,API_URL}}>{children}</AppContext.Provider>
}
const useGlobalcontext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalcontext};