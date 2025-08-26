import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
export default function Loder(){
  return(
    <>
    <div className="flex items-center justify-center w-full h-full mx-auto">
    <MagnifyingGlass
  visible={true}
  height="100"
  width="100"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />
    </div>
    </>
  )
}