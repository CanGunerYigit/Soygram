
import {AiFillCloseCircle} from "react-icons/ai"
import {useState} from "react";
import classNames from "classnames";

export default function Search() {

	const [open, setOpen] = useState(false)

	return (
		<div className="w-[268px] relative">
			
			<input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} type="text" placeholder="Ara" className="h-9 outline-none focus:pl-3 pl-9 w-full rounded bg-[#efefef]"/>
			<button onClick={() => setOpen(false)} className={classNames({
				"absolute text-[#c7c7c7] hidden top-0 right-0 w-9 h-9 items-center justify-center": true, //search bardaki çarpı ikonu açıp kapatma
				"!flex": open
			})}>
				<AiFillCloseCircle />   
			</button>
		</div>
	)
}