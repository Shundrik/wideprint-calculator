// import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import React from "react";


export const ListMaterials=()=>{

  

    return(
    <>

    <ul>
      <li> <NavLink to={"/film"}>Плівка</NavLink></li>
      <li> <NavLink to={"/baner"}>Банер</NavLink></li>
      <li> <NavLink to={"/paper"}>Папір</NavLink></li>
      
    </ul>
    
    </>
       
    
    )
}
export default ListMaterials;