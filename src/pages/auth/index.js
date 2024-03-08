import { Outlet } from "react-router-dom"
export default function AuthLayout(){
    return(
        <div className="h-full w-full flex items-center justify-center flex-wrap overflow-auto absolute">
             <Outlet></Outlet>
        </div>
      
    )
}