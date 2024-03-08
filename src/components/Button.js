export default function Button({type="button",children,...props}){
    return(
        
        <button type={type} {...props} className=" h-[38px] w-full bg-yellow-500 text-white text-md font-bold rounded-md mt-4 disabled:opacity-50">  {children}</button>
    )
}