// import React, { useState } from 'react'
// import { FilterList } from '../Js/FilterList'
// import { IoIosArrowDown } from "react-icons/io";

// export default function Filter() {
//     const[sort,setsort]=useState({})
//      function RenderCategorys(categories,onlyName){
//          return(
//             <ul className='submenus show-menus transition-all duration-300 delay-100 ease-in-out'>
//                 {categories.map((element)=>{
//                     let {name,value}=element;
//                     return(
                        
//                         <li key={name} className='py-1 px-1.5  flex items-center'>
//                         <input type='radio' id={name} name={onlyName} className=' pr-2.5 accent-black'required/>
//                         <label htmlFor={name}  className=' pl-2.5 flex' name={onlyName} onClick={(e)=>setvalue(e,value)}><span className='text-gray-800 -300 flex w-full'>{name}</span></label>
//                         </li>
                        
//                     )
//                 })}
//             </ul>
//          )
//      }

//     function toogleMenu(e){
//       let submenus=e.target.querySelector('ul');
//       if(!submenus) return

//        if(submenus.classList.contains('show-menus')){
//         submenus.classList.add('hide-menus')
//         submenus.classList.remove('show-menus')
        
//        }else{
//            submenus.classList.add('show-menus')
//         submenus.classList.remove('hide-menus')

//        }
      
//     }

//     function Submit(e){
//         e.preventDefault();
       
// console.log(sort)
//     }
//     function setvalue(e){
//      console.log(e)
    
//     }

//   return (
//    <>
//    <div className=' w-[230px] h-full border border-gray-500 py-2.5 px-2.5 m-[20px] '>
//      <form   onSubmit={Submit}>
//         <ul>
//         {FilterList.map((element,index)=>{
//             let {category,onlyName}=element;
//             return(
//                 <li onClick={toogleMenu} key={index}>
//                <div className='flex items-center justify-between py-1.5 px-1.5 my-0.5 bg-slate-100 pointer-events-none'><span className='text-black'>{category}</span>
//                <span className='text-black'><IoIosArrowDown className='i text-black'/></span>
//                </div>
//                {element.CategoryList && RenderCategorys(element.CategoryList,onlyName)}
//                </li>
//             )
//         })}

//         </ul>
//         <input type='submit'value='submit'className=' w-full py-2  px-2  text-center bg-slate-900 text-white mt-3'/>
//         </form>
//      </div>
 
   
   
//    </>
//   )
// }

import React, { useState } from "react";

const FilterComponent = () => {
    const [filters, setFilters] = useState({
        status: "",
        category: "",
        priority: ""
      });
    
      const filterOptions = {
        status: ["Upcoming", "Completed", "Cancelled"],
        category: ["Meeting", "Interview", "Follow-up"],
        priority: ["High", "Medium", "Low"]
      };
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-full mb-6">
      <div className="flex flex-wrap gap-4">
        {Object.keys(filterOptions).map((key) => (
          <select
            key={key}
            name={key}
            value={filters[key]}
            onChange={handleChange}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-100"
          >
            <option value="">{key.charAt(0).toUpperCase() + key.slice(1)}</option>
            {filterOptions[key].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
