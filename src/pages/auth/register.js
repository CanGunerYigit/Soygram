
import Input from "components/Input";
import React from "react";
import { useEffect, useRef, useState } from "react";
import {FaFacebook} from "react-icons/fa"
import { useNavigate,useLocation,Link } from "react-router-dom";
import { register } from "firebase.js";
import { Formik,Form } from "formik";
import { RegisterSchema } from "validation";
import classNames from "classnames";
import Button from "components/Button";
import Seperator from "components/Seperator";


export default function Register(){
const ref= useRef()


const navigate=useNavigate()
const location=useLocation()



 
  
  

  const handleSubmit= async (values,actions) =>{
   const response= await register(values)
   if(response){
    navigate(location.state?.return_url || "/",{
      replace:true
  
})}
   }
    
    
  return (
   
      
      <div>
       <div className="w-[400px]  bg-[#242424] p-[50px] ml-[30px]  " >
        <h1 className="  text-white text-5xl font-serif italic font-semibold mb-8 ml-4">SOYGRAM</h1> 
         <p className=" text-center text-white text-[17px] font-semibold pb-[40px]">Diğer Soyboyların fotoğraf ve videolarını görmek ister misin?</p>
         <div>
          <Formik
           validationSchema={RegisterSchema}
           initialValues={{
            email: "",
            fullname: "",
            username:"",
            password:""
           }}
           onSubmit={handleSubmit}
          >
            {(isSubmitting,isValid,dirty,values)=>(
            <Form>
             <Input name="email"  label="Email"></Input>
             <Input name="full_name" label="Fullname"></Input>
             <Input name="username"label="Username"></Input>
             
             <Input  type="password" name="password" label="Şifre giriniz"></Input>
             <Button  type="submit"  > Kayıt  Ol</Button>
           
           
            
          
          
              </Form>

            )}
          </Formik>   
          </div>  
          </div>
       
        <div className="flex font-semibold text-white  bg-[#242424] justify-center items-center w-[400px] mt-5 ml-[30px] h-[60px] ">
          Hesabınız var mı? <Link className="ml-1 font-semibold text-brand text-yellow-500" to={"/auth/login"}>Giriş yapın</Link>
        </div>
       </div>

              
  
   
      
    
  

  );
  }
