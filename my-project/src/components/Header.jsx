import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {
    let [show, setShow] = useState(false)
    
  return (
    <header className='py-5'>
        <Container>
      <Flex className="justify-between">
        <div className="w-1/4">
        <img src ={Logo} alt=""/>
        </div>
        <div className="w-3/4">
        <ul className={`lg:flex justify-center gap-x-5 absolute left-0 top-0 lg:static ${show == true ? "top-[-120px] bg-[gray] w-full" : "top-[70px] bg-[green] w-full"} `}>
            <li className='font-sans text-[#767676] font-bold hover:text-[#262626] py:3 lg:py-0'><a>Home</a></li>
            <li className='font-sans text-[#767676] font-bold hover:text-[#262626] py:3 lg:py-0'><a>Shop</a></li>
            <li className='font-sans text-[#767676] font-bold hover:text-[#262626] py:3 lg:py-0'><a>About</a></li>
            <li className='font-sans text-[#767676] font-bold hover:text-[#262626] py:3 lg:py-0'><a>Contact</a></li>
            <li className='font-sans text-[#767676] font-bold hover:text-[#262626] py:3 lg:py-0'><a>Journal</a></li>
        </ul>
        </div>
        <div onClick={()=>setShow(!show)}className="lg:hidden">
            {show == true ? <ImCross/> : <FaBars/> }
            


        </div>
        
       </Flex>
    </Container>
    </header>
  )
}

export default Header