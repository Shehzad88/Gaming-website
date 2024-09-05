import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const [downlist, setDownlistOpen] = useState(false);
    const [toggle, settoggle] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [listed,setlistedOpen]=useState(false);
    const [show, setshow]=useState(false);
    
    return (
        <div className='bg-blue-950 p-4 flex'>
            <div className='justify-between flex justify-between w-[1240px] items-center'>
                <div>
                    <h1 className='text-white font-bold p-2 text-xl'>Hello</h1>
                </div>
                {
                    toggle ?
                        <IoClose onClick={() => settoggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <IoMenu onClick={() => settoggle(!toggle)} className='text-white text-2xl md:hidden block' />
                }

                <ul className='text-white flex gap-5 md:flex hidden'>
                    <li
                    className='relative'
                    onMouseEnter={()=>setlistedOpen(true)}
                    onMouseLeave={()=>setlistedOpen(false)}
                    >Home
                    {
                        listed &&(
                    
                    <ul className='absolute z-10 bg-white text-black p-3 w-40 '>
                        <li>home</li>
                        <li>About</li>
                        <li>home</li>
                    </ul>
                        )}
                    </li>

                    <li
                    className='relative'
onMouseEnter={()=>setshow(true)}
onMouseLeave={()=>setshow(false)}
                    >
                        Company{show &&(
                            <ul className='z-10 absolute w-40 bg-white text-black p-2'>
                                <li>home</li>
                                <li>home</li>
                            </ul>
                        )}
                        
                        </li>
                    <li
                        className='relative'
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        Resources
                        {dropdownOpen && (
                            <ul className='absolute z-10 bg-white text-black p-2 w-48'>
                                <li  className='relative p-2'>Home
                                    
                                </li>

                                <li className='p-2'>About</li>
                                <li className='p-2'>Services</li>
                            </ul>
                        )}
                    </li>
                    <li
                        className='relative'
                        onMouseEnter={() => setDownlistOpen(true)}
                        onMouseLeave={() => setDownlistOpen(false)}
                    >
                        Contact
                        {downlist && (
                            <ul className='absolute z-10 bg-white text-black p-2 w-48 right-0'>
                                <li className='p-2'>+923036333</li>
                                <li className='p-2'>Dial</li>
                            </ul>
                        )}
                    </li>
                </ul>

                <ul className={`text-white w-full h-screen fixed gap-5 md:hidden block p-6 top-[92px] bg-black ${toggle ? 'left-0' : 'left-[-100%]'}`}>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
