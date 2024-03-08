
import classNames from "classnames"
import { useField } from "formik"
import { useEffect, useRef, useState } from "react"
export default function Input({label,type="text",...props}){

  const [field,meta,helpers] = useField(props)
  const inputRef=useRef()
  const[göster,setshow] = useState(false)
  const[inputtype,settype]=useState(type)
  useEffect(()=>{
    if(göster){
      settype("text")
      inputRef.current.focus() //gizle göster butonu
    }else if(type=="password"){
      settype("password")
      inputRef.current.focus()

    }
  }
   ,[göster] )
    return (
    <label className="block relative">
    <input required={true} ref={inputRef} type={inputtype} className={classNames({
      "bg-[#383838] mt-2 px-2 outline-none focus:border-gray-400 border w-full h-[38px]  text-gray-300 font-bold  rounded-md  ":true,"pt-[10px]":field.value
    })}{...field} {...props}></input>
    <small className={classNames({" text-gray-300  absolute  left-2 text-xs -translate-y-1/2 cursor-text pointer-events-none transition-all  ":true,"text-[10px] top-4":field.value,"text-md top-1/2":!field.value})}>{label}</small>
    {type=="password" && field.value &&
     <button onClick={()=>setshow(göster=>!göster)} className="absolute -top-1 right-2 h-full flex items-center text-white font-semibold text-sm">
          {göster? "Gizle":"Göster"}
     </button>
    }
  </label>)
  
}
