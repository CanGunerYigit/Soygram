
import Input from "components/Input";
import React from "react";
import { useEffect, useRef, useState } from "react";
import {FaFacebook} from "react-icons/fa"
import { useNavigate,useLocation,Link } from "react-router-dom";
import { login } from "firebase.js";
import { Formik,Form } from "formik";
import { LoginSchema } from "validation";
import classNames from "classnames";
import Button from "components/Button";
import Seperator from "components/Seperator";

export default function Login(){
const ref= useRef()


const navigate=useNavigate()
const location=useLocation()



  useEffect(()=>{
    let images=ref.current.querySelectorAll("img"),
    total=images.length,
    current=0
    setInterval(()=>{ 
      if(current>0){
        images[current-1].classList.add("opacity-0")// login screen img geçişleri
      } else{
        images[total-1].classList.add("opacity-0")
      }
      images[current].classList.remove("opacity-0")
      if (current == total-1){
        current = 0
      }
      else{
        current+=1
      }
    },3000)
  
  },[ref])
  
  

  const handleSubmit= async (values,actions) =>{
    await login(values.username,values.password)
  
   
    navigate(location.state?.return_url || "/",{
      replace:true
  
})
   }
  
    
  return (
    <div className="h-full w-full flex items-center justify-center flex-wrap overflow-auto absolute">
      <div className="w-[380px] h-[581px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] "ref={ref}>
        <img className=" absolute opacity-0 rounded-xl mt-7 ml-[110px] w-[250px] h-[539px] transition-opacity duration-500 ease-linear" src="https://www.dictionary.com/e/wp-content/uploads/2018/05/soyboy-2.png" alt="" /> 
        <img className="absolute  opacity-0 rounded-xl mt-7 ml-[110px] w-[250px] h-[539px] transition-opacity duration-500 ease-linear" src="https://ih1.redbubble.net/image.1438217434.9332/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"></img>
        <img className="absolute opacity-0  rounded-xl mt-7 ml-[110px] w-[250px] h-[539px] transition-opacity duration-500 ease-linear" src="https://a.pinatafarm.com/412x242/e481aa8965/soyboy-wojack.jpg"></img>
        <img className="absolute  opacity-0 rounded-xl mt-7 ml-[110px] w-[250px] h-[539px] transition-opacity duration-500 ease-linear" src="https://i.imgflip.com/637q9z.png"></img>

      </div>
      
      <div>
       <div className="w-[400px]  bg-[#242424] p-[50px] ml-[30px]  " >
        <h1 className="  text-white text-5xl font-serif italic font-semibold mb-8 ml-4">SOYGRAM</h1> 
         <div>
          <Formik
           validationSchema={LoginSchema}
           initialValues={{
            username: "",
            password: ""
           }}
           onSubmit={handleSubmit}
          >
            {(isSubmitting,isValid,dirty,values)=>(
            <Form>
             <Input name="username"  label="Telefon numarası,kullanıcı adı yada email giriniz"></Input>
             <Input type="password" name="password" label="Şifre giriniz"></Input>
             <Button type="submit"  > Giriş Yap</Button>
           <Seperator></Seperator>
            <a className=" flex items-center justify-center text-white pt-[24px] font-semibold ">
              <FaFacebook size={20} className="  text-blue-600"> </FaFacebook>
               <a href="https://www.facebook.com/" className="pl-2 ">Facebook ile Bağlan</a>
            </a>
            <a className=" text-sm flex items-center text-white pt-[40px] justify-center font-semibold">Şifrenizi mi unuttunuz?</a>
          
              </Form>

            )}
          </Formik>   
          </div>  
          </div>
       <div className="flex font-semibold text-white  bg-[#242424] justify-center items-center w-[400px] mt-5 ml-[30px] h-[60px] ">
         Hesabınız mı yok ?  <Link to="/auth/register"className="ml-1 font-semibold text-brand text-yellow-500"> Hemen kayıt oluşturun</Link>
        
       </div>
       </div>

    </div>
  
   
      
    
  

  );
  }
